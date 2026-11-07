import type { CloudData } from "./cloud";

export type Status = "Pendente" | "Em andamento" | "Concluído";

export type PagamentoStatus = "Pago" | "Pendente";

export type Etapa = {
  id: number;
  nome: string;
  percentual: number;
};

export type FotoObra = {
  id: number;
  nome: string;
  descricao: string;
  data: string;
  url: string;
};

export type FerramentaUnidade = {
  id: string;
  identificacao: string;
  obra: string;
  localizacao: string;
};

export type FotoDiarioObra = {
  id: number;
  nome: string;
  descricao: string;
  url: string;
  data: string;
};

export type DiarioObra = {
  id: number;
  obra: string;
  data: string;
  titulo: string;
  descricao: string;
  etapa: string;
  observacao: string;
  fotos: FotoDiarioObra[];
};

export type Ferramenta = {
  id: number;
  nome: string;
  marca: string;
  modelo: string;
  quantidade: number;
  valorUnitario: number;
  dataCompra: string;
  localizacao: string;
  obra: string;
  identificacao: string;
  observacao: string;
  unidades?: FerramentaUnidade[];
};

export type Obra = {
  id: number;
  nome: string;
  cliente: string;
  local: string;
  inicio: string;
  previsao: string;
  orcamento: number;
  recebido: number;
  status: Status;
  equipe: number[];
  etapas: Etapa[];
  fotos?: FotoObra[];
};

export type Pessoa = {
  id: number;
  nome: string;
  funcao: string;
  telefone: string;
  diaria: number;
  pix: string;
  tipoPix: string;
  cpf?: string;
  endereco?: string;
  foto?: string;
  diasTrabalhados?: Record<string, boolean>;
  meiasDiarias?: Record<string, boolean>;
  semanasGerenciadas?: string[];
};

export type Tarefa = {
  id: number;
  obra: string;
  descricao: string;
  responsavel: string;
  prazo: string;
  status: Status;
  percentual: number;
};

export type Material = {
  id: number;
  obra: string;
  nome: string;
  quantidade: number;
  unidade: string;
  valor: number;
};

export type Despesa = {
  id: number;
  obra: string;
  descricao: string;
  categoria: string;
  valor: number;
  data: string;
};

export type RegistroPagamento = {
  id: number;
  funcionarioId: number;
  nomeFuncionario: string;
  valor: number;
  diasTrabalhados: number;
  semanaInicio: string;
  semanaFim: string;
  dataPagamento: string;
  diasChaves?: string[];
  diasMeiaChaves?: string[];
};

export type CloudDataComHistorico = CloudData & { registrosPagamentos?: RegistroPagamento[]; diarioObra?: DiarioObra[] };

export type Pagamento = {
  id: number;
  obra: string;
  descricao: string;
  valor: number;
  data: string;
  status: PagamentoStatus;
  // Preenchidos automaticamente quando o pagamento vem do controle semanal do funcionário.
  funcionarioId?: number;
  semanaInicio?: string;
  semanaFim?: string;
  diasTrabalhados?: number;
  diasMeiaChaves?: string[];
  origem?: "diarias" | "manual";
};
