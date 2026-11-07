import type { CloudDataComHistorico } from "./types";

export const CHAVE_DADOS = "obracontrol_dados_v2";

// Carimbos de data das gravações. Servem para saber qual cópia é a mais recente
// quando o IndexedDB e o localStorage divergem (por exemplo, se uma gravação falhar).
const CHAVE_SALVO_EM = "cgl_salvo_em_v1";
const CHAVE_SALVO_EM_BANCO = `${CHAVE_DADOS}:salvoEm`;
// Carimbo gravado pelo cloud.ts em salvarDadosLocaisDireto/saveCloudData.
const CHAVE_ATUALIZADO_CLOUD = "cgl_offline_updated_at_v1";

// IndexedDB aceita conjuntos de dados maiores que o limite pequeno do localStorage.
// Mantemos o mesmo formato do backup e usamos localStorage como cópia compatível.
const CGL_DB_NOME = "cgl_dados_offline";
const CGL_DB_STORE = "dados";
const abrirBancoCGL = (): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("Este navegador não oferece armazenamento local ampliado."));
      return;
    }
    const pedido = indexedDB.open(CGL_DB_NOME, 1);
    pedido.onupgradeneeded = () => {
      const banco = pedido.result;
      if (!banco.objectStoreNames.contains(CGL_DB_STORE)) banco.createObjectStore(CGL_DB_STORE);
    };
    pedido.onsuccess = () => resolve(pedido.result);
    pedido.onerror = () => reject(pedido.error || new Error("Falha ao abrir o armazenamento local."));
  });

export const gravarBancoCGL = async (dados: CloudDataComHistorico): Promise<void> => {
  const banco = await abrirBancoCGL();
  try {
    await new Promise<void>((resolve, reject) => {
      const transacao = banco.transaction(CGL_DB_STORE, "readwrite");
      const loja = transacao.objectStore(CGL_DB_STORE);
      loja.put(dados, CHAVE_DADOS);
      loja.put(new Date().toISOString(), CHAVE_SALVO_EM_BANCO);
      transacao.oncomplete = () => resolve();
      transacao.onerror = () => reject(transacao.error || new Error("Falha ao gravar os dados."));
      transacao.onabort = () => reject(transacao.error || new Error("Gravação cancelada."));
    });
  } finally {
    banco.close();
  }
};

const lerBancoRegistroCGL = async (): Promise<{ dados: CloudDataComHistorico | null; salvoEm: string | null }> => {
  const banco = await abrirBancoCGL();
  try {
    return await new Promise((resolve, reject) => {
      const loja = banco.transaction(CGL_DB_STORE, "readonly").objectStore(CGL_DB_STORE);
      const pedidoDados = loja.get(CHAVE_DADOS);
      const pedidoData = loja.get(CHAVE_SALVO_EM_BANCO);
      pedidoDados.onerror = () => reject(pedidoDados.error || new Error("Falha ao ler os dados."));
      pedidoData.onsuccess = () =>
        resolve({
          dados: (pedidoDados.result as CloudDataComHistorico | undefined) ?? null,
          salvoEm: typeof pedidoData.result === "string" ? pedidoData.result : null,
        });
      pedidoData.onerror = () => reject(pedidoData.error || new Error("Falha ao ler os dados."));
    });
  } finally {
    banco.close();
  }
};

// Grava a cópia de compatibilidade no localStorage junto com o carimbo de data.
// Lança erro se o navegador recusar a gravação (por exemplo, limite de espaço).
export const gravarCopiaLocal = (dados: CloudDataComHistorico): void => {
  localStorage.setItem(CHAVE_DADOS, JSON.stringify(dados));
  try {
    localStorage.setItem(CHAVE_SALVO_EM, new Date().toISOString());
  } catch {
    // Sem o carimbo, o IndexedDB continua sendo a referência.
  }
};

const carimboLocal = (): string | null => {
  try {
    const datas = [localStorage.getItem(CHAVE_SALVO_EM), localStorage.getItem(CHAVE_ATUALIZADO_CLOUD)].filter(
      (valor): valor is string => !!valor
    );
    return datas.length ? datas.sort().at(-1) ?? null : null;
  } catch {
    return null;
  }
};

// Carrega os dados salvos no aparelho. O IndexedDB é a fonte principal, mas se a cópia do
// localStorage for comprovadamente mais nova (a gravação no IndexedDB falhou depois dela),
// usa a mais nova para não perder alterações.
export const carregarDadosLocais = async (): Promise<CloudDataComHistorico | null> => {
  let banco: { dados: CloudDataComHistorico | null; salvoEm: string | null } = { dados: null, salvoEm: null };
  try {
    banco = await lerBancoRegistroCGL();
  } catch (erroBanco) {
    console.warn("Leitura do IndexedDB indisponível; usando cópia compatível.", erroBanco);
  }

  const bruto = localStorage.getItem(CHAVE_DADOS);
  let local: CloudDataComHistorico | null = null;
  if (bruto) {
    try {
      local = JSON.parse(bruto) as CloudDataComHistorico;
    } catch (erroLeitura) {
      // Com o IndexedDB íntegro, a cópia corrompida é ignorada. Sem ele, não há
      // de onde recuperar: avisa em vez de abrir o app vazio.
      if (!banco.dados) throw erroLeitura;
    }
  }

  if (banco.dados && local) {
    const carimboCopia = carimboLocal();
    if (carimboCopia && banco.salvoEm && carimboCopia > banco.salvoEm) return local;
    return banco.dados;
  }
  return banco.dados ?? local;
};

export const ler = <T,>(chave: string, padrao: T[]): T[] => {
  try {
    const valorNovo = localStorage.getItem(CHAVE_DADOS);

    if (valorNovo) {
      const dados = JSON.parse(valorNovo);
      const lista = dados?.[chave];
      return Array.isArray(lista) ? lista : padrao;
    }

    // Compatibilidade: recupera dados da versão anterior do aplicativo.
    const valorAntigo = localStorage.getItem(chave);
    if (!valorAntigo) return padrao;

    const dadosAntigos = JSON.parse(valorAntigo);
    return Array.isArray(dadosAntigos) ? dadosAntigos : padrao;
  } catch {
    return padrao;
  }
};
