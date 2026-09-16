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
  const texto = await file.text();
  const pacote = JSON.parse(texto);

  // Aceita tanto o novo formato .cglbackup quanto um JSON de dados
  // compatível com a versão anterior do CGL.
  const dados = pacote?.formato === "CGL_BACKUP" ? pacote?.dados : pacote;

  if (!dados || typeof dados !== "object") {
    throw new Error("Arquivo de backup inválido.");
  }

  const chaves = ["obras", "tarefas", "pessoas", "materiais", "despesas", "pagamentos"];
  if (!chaves.every((chave) => Array.isArray(dados[chave]))) {
    throw new Error("Este arquivo não contém um backup completo do CGL.");
  }

  return dados as CloudData;
}

export function salvarDadosLocaisDireto(data: CloudData): string {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
  return registrarAtualizacao();
}
