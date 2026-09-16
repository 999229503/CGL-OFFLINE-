export type CloudData = {
  obras: unknown[];
  tarefas: unknown[];
  pessoas: unknown[];
  materiais: unknown[];
  despesas: unknown[];
  pagamentos: unknown[];
  ferramentas?: unknown[];
  registrosPagamentos?: unknown[];
  diarioObra?: unknown[];
};

export type AuthSession = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  expires_at?: number;
  user: { id: string; email?: string };
};

// CGL OFFLINE
// Este arquivo mantém a mesma interface usada pelo App.tsx, mas não faz
// nenhuma chamada de rede. Os dados ficam no armazenamento local do navegador.
// Isso permite retirar o Supabase sem alterar a estrutura das telas do CGL.
const DATA_KEY = "obracontrol_dados_v2";
const SESSION_KEY = "cgl_offline_session_v1";
const UPDATED_KEY = "cgl_offline_updated_at_v1";

export const cloudConfigured = true;

const usuarioLocal: AuthSession["user"] = {
  id: "cgl-offline-owner",
  email: "CGL • Modo offline",
};

function lerDados(): CloudData | null {
  try {
    const raw = localStorage.getItem(DATA_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed as CloudData;
  } catch {
    return null;
  }
}

function registrarAtualizacao() {
  const stamp = new Date().toISOString();
  localStorage.setItem(UPDATED_KEY, stamp);
  return stamp;
}

function criarSessaoLocal(): AuthSession {
  const sessao: AuthSession = {
    access_token: "offline-local-token",
    refresh_token: "offline-local-refresh",
    expires_in: 315360000,
    expires_at: Math.floor(Date.now() / 1000) + 315360000,
    user: usuarioLocal,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessao));
  return sessao;
}

export async function login(_email: string, _password: string): Promise<AuthSession> {
  return criarSessaoLocal();
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export async function getSession(): Promise<AuthSession | null> {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (raw) return JSON.parse(raw) as AuthSession;
  } catch {
    // Se a sessão estiver corrompida, recria a sessão local.
  }
  return criarSessaoLocal();
}

export async function logout(_session: AuthSession | null) {
  // Não há servidor no modo offline. Apenas encerra a sessão local.
  clearSession();
}

export async function getCloudUpdatedAt(_session: AuthSession): Promise<string | null> {
  return localStorage.getItem(UPDATED_KEY);
}

export async function loadCloudData(_session: AuthSession): Promise<{ data: CloudData | null; updatedAt: string | null }> {
  return {
    data: lerDados(),
    updatedAt: localStorage.getItem(UPDATED_KEY),
  };
}

export async function saveCloudData(_session: AuthSession, data: CloudData): Promise<string> {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
  return registrarAtualizacao();
}

export function exportarBackupCGL(data: CloudData): Blob {
  const pacote = {
    formato: "CGL_BACKUP",
    versao: 1,
    aplicativo: "CGL - Gerenciamento de Obras",
    exportadoEm: new Date().toISOString(),
    dados: data,
  };

  return new Blob([JSON.stringify(pacote)], {
    type: "application/json;charset=utf-8",
  });
}

export async function importarBackupCGL(file: File): Promise<CloudData> {
  const nome = file.name.toLowerCase();
  let texto: string;

  if (nome.endsWith(".zip") || file.type === "application/zip" || file.type === "application/x-zip-compressed") {
    texto = await extrairJsonDoZip(file);
  } else {
    texto = await file.text();
  }

  let pacote: unknown;
  try {
    pacote = JSON.parse(texto);
  } catch {
    throw new Error("Não foi possível ler o arquivo de backup. Use o BACKUP_CGL_COMPLETO.zip ou um arquivo .cglbackup/.json válido.");
  }

  // Formato .cglbackup criado pela versão offline.
  let dados: unknown = pacote;
  if (ehObjeto(pacote) && pacote.formato === "CGL_BACKUP") {
    dados = pacote.dados;
  }

  // Formato do backup exportado pelo CGL/Supabase:
  // { backup_type, record_count, records: [{ user_id, updated_at, data: {...} }] }
  if (ehObjeto(pacote) && Array.isArray(pacote.records)) {
    const registro = pacote.records.find(
      (item) => ehObjeto(item) && ehObjeto(item.data)
    );

    if (!registro || !ehObjeto(registro.data)) {
      throw new Error("O backup foi lido, mas não contém um registro de dados válido do CGL.");
    }

    dados = registro.data;
  }

  if (!ehObjeto(dados)) {
    throw new Error("Arquivo de backup inválido.");
  }

  const chavesObrigatorias = [
    "obras",
    "tarefas",
    "pessoas",
    "materiais",
    "despesas",
    "pagamentos",
  ];

  if (!chavesObrigatorias.every((chave) => Array.isArray(dados[chave]))) {
    throw new Error("Este arquivo não contém um backup completo do CGL.");
  }

  // Campos adicionados em versões mais recentes são opcionais para manter
  // compatibilidade com backups antigos.
  return dados as CloudData;
}

function ehObjeto(valor: unknown): valor is Record<string, any> {
  return typeof valor === "object" && valor !== null;
}

async function extrairJsonDoZip(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);

  // Localiza o diretório central do ZIP (EOCD).
  const inicioBusca = Math.max(0, bytes.length - 65557);
  let eocd = -1;
  for (let i = bytes.length - 22; i >= inicioBusca; i--) {
    if (
      bytes[i] === 0x50 &&
      bytes[i + 1] === 0x4b &&
      bytes[i + 2] === 0x05 &&
      bytes[i + 3] === 0x06
    ) {
      eocd = i;
      break;
    }
  }

  if (eocd < 0) {
    throw new Error("O arquivo ZIP não possui uma estrutura válida.");
  }

  const quantidade = view.getUint16(eocd + 10, true);
  const tamanhoDiretorio = view.getUint32(eocd + 12, true);
  const inicioDiretorio = view.getUint32(eocd + 16, true);

  let pos = inicioDiretorio;
  let melhorEntrada: {
    nome: string;
    metodo: number;
    tamanhoComprimido: number;
    deslocamentoLocal: number;
  } | null = null;

  for (let n = 0; n < quantidade && pos + 46 <= bytes.length; n++) {
    if (view.getUint32(pos, true) !== 0x02014b50) break;

    const metodo = view.getUint16(pos + 10, true);
    const tamanhoComprimido = view.getUint32(pos + 20, true);
    const nomeLen = view.getUint16(pos + 28, true);
    const extraLen = view.getUint16(pos + 30, true);
    const comentarioLen = view.getUint16(pos + 32, true);
    const deslocamentoLocal = view.getUint32(pos + 42, true);

    const nome = new TextDecoder().decode(
      bytes.subarray(pos + 46, pos + 46 + nomeLen)
    );

    if (nome.toLowerCase().endsWith(".json")) {
      melhorEntrada = {
        nome,
        metodo,
        tamanhoComprimido,
        deslocamentoLocal,
      };
      break;
    }

    pos += 46 + nomeLen + extraLen + comentarioLen;
  }

  void tamanhoDiretorio; // Mantém a leitura do EOCD explícita para compatibilidade.

  if (!melhorEntrada) {
    throw new Error("Não encontrei um arquivo JSON dentro deste ZIP.");
  }

  const local = melhorEntrada.deslocamentoLocal;
  if (view.getUint32(local, true) !== 0x04034b50) {
    throw new Error("A entrada JSON do ZIP não possui um cabeçalho válido.");
  }

  const nomeLocalLen = view.getUint16(local + 26, true);
  const extraLocalLen = view.getUint16(local + 28, true);
  const inicioDados = local + 30 + nomeLocalLen + extraLocalLen;
  const fimDados = inicioDados + melhorEntrada.tamanhoComprimido;

  if (fimDados > bytes.length) {
    throw new Error("O arquivo JSON dentro do ZIP está incompleto.");
  }

  const comprimido = bytes.slice(inicioDados, fimDados);

  if (melhorEntrada.metodo === 0) {
    return new TextDecoder().decode(comprimido);
  }

  if (melhorEntrada.metodo === 8) {
    try {
      const DS = DecompressionStream as unknown as new (format: string) => TransformStream;
      const stream = new Blob([comprimido]).stream().pipeThrough(new DS("deflate-raw"));
      const descomprimido = await new Response(stream).arrayBuffer();
      return new TextDecoder().decode(descomprimido);
    } catch {
      throw new Error("O ZIP foi encontrado, mas este navegador não conseguiu descompactar o JSON. Extraia o BACKUP_CGL_COMPLETO.json e importe o JSON.");
    }
  }

  throw new Error(`O ZIP usa um método de compressão não suportado (${melhorEntrada.metodo}).`);
}

export function salvarDadosLocaisDireto(data: CloudData): string {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
  return registrarAtualizacao();
}
