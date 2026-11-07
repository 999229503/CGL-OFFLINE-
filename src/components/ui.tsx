import type React from "react";
import type { Status } from "../types";

export function Empty({ texto }: { texto: string }) {
  return (
    <div className="empty">
      <div className="emptyIcon">📭</div>
      <strong>{texto}</strong>
      <span>Use o botão + Adicionar para começar.</span>
    </div>
  );
}

export function StatusSelect({
  value,
  onChange,
}: {
  value: Status;
  onChange: (value: Status) => void;
}) {
  return (
    <select
      className={`status status-${value
        .toLowerCase()
        .replaceAll(" ", "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}`}
      value={value}
      onChange={(e) => onChange(e.target.value as Status)}
    >
      <option value="Pendente">Pendente</option>
      <option value="Em andamento">Em andamento</option>
      <option value="Concluído">Concluído</option>
    </select>
  );
}

export function Campo({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="field">
      <span>
        {label}
        {required && <b>*</b>}
      </span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        inputMode={inputMode}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export function Modal({
  titulo,
  children,
  fechar,
  largura = 650,
  telaCheia = false,
}: {
  titulo: string;
  children: React.ReactNode;
  fechar: () => void;
  largura?: number;
  telaCheia?: boolean;
}) {
  return (
    <div className={`modalOverlay${telaCheia ? " modalTelaCheia" : ""}`} onMouseDown={fechar}>
      <div
        className={`modal${telaCheia ? " modalJanelaTelaCheia" : ""}`}
        style={telaCheia ? undefined : { maxWidth: largura }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="modalHeader">
          <div>
            <h2>{titulo}</h2>
            <span>Preencha os dados abaixo</span>
          </div>

          <button className="close" onClick={fechar}>
            ×
          </button>
        </div>

        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}

export function BarraProgresso({ valor }: { valor: number }) {
  const porcentagem = Math.max(0, Math.min(100, valor));

  return (
    <div>
      <div className="progressInfo">
        <strong>{Math.round(porcentagem)}%</strong>
      </div>

      <div className="progress">
        <div
          className="progressBar"
          style={{ width: `${porcentagem}%` }}
        />
      </div>
    </div>
  );
}

export function IconeNav({ nome }: { nome: string }) {
  const paths: Record<string,string> = {
    Dashboard:"M3 10.5 12 3l9 7.5V21H14v-6h-4v6H3z",
    Obras:"M4 21V8l8-5 8 5v13M8 21v-5h8v5M9 9h.01M15 9h.01M9 12h.01M15 12h.01",
    Tarefas:"M5 4h14v16H5z M8 8h8M8 12h8M8 16h5",
    "Funcionários":"M16 20v-1.5A3.5 3.5 0 0 0 12.5 15h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M16 11a2.5 2.5 0 1 0 0-5M18 15a3.5 3.5 0 0 1 3 3.5V20",
    Materiais:"M4 7.5 12 3l8 4.5-8 4.5-8-4.5ZM4 12l8 4.5 8-4.5M4 16.5 12 21l8-4.5",
    Despesas:"M7 3h10v18H7z M9 7h6M9 11h6M9 15h4",
    Pagamentos:"M5 5h14v14H5z M8 12l2.5 2.5L16 9",
    Ferramentas:"M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4L14 12l-2-2 2.7-2.7Z",
     "Diário de Obra":"M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM8 7h8M8 11h8M8 15h5"
  };
  return <span className="navIcon"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={paths[nome] || paths.Dashboard}/></svg></span>;
}
