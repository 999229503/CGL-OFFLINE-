// Utilitários puros do CGL (sem dependência de estado do React).

// IDs locais: evitam colisões quando várias inclusões acontecem no mesmo milissegundo.
let sequenciaId = 0;
export const novoId = () => Date.now() * 1000 + (++sequenciaId % 1000);

export const hoje = (() => {
  const data = new Date();
  const deslocamento = data.getTimezoneOffset() * 60000;
  return new Date(data.getTime() - deslocamento).toISOString().slice(0, 10);
})();

export const dinheiro = (valor: number) =>
  Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export const numero = (valor: string | number | null | undefined) => {
  if (typeof valor === "number") {
    return Number.isFinite(valor) ? valor : 0;
  }

  let texto = String(valor ?? "").trim().replace(/\s/g, "");
  if (!texto) return 0;

  // Aceita tanto o padrão brasileiro (1.234,56) quanto o decimal
  // digitado com ponto (1234.56). O parser antigo removia TODOS os
  // pontos, fazendo 100.00 virar 10000 (R$ 10.000,00).
  const temVirgula = texto.includes(",");
  const temPonto = texto.includes(".");

  if (temVirgula && temPonto) {
    // O último separador é tratado como decimal.
    const ultimaVirgula = texto.lastIndexOf(",");
    const ultimoPonto = texto.lastIndexOf(".");
    const separadorDecimal = ultimaVirgula > ultimoPonto ? "," : ".";
    const separadorMilhar = separadorDecimal === "," ? "." : ",";
    texto = texto.split(separadorMilhar).join("");
    texto = texto.replace(separadorDecimal, ".");
  } else if (temVirgula) {
    // No CGL, vírgula é o separador decimal.
    texto = texto.replace(/\./g, "").replace(",", ".");
  } else if (temPonto) {
    const partes = texto.split(".");
    const ultimaParte = partes[partes.length - 1] || "";
    // 100.00 / 1.5 = decimal; 100.000 / 1.500 = milhar.
    // Isso mantém a digitação brasileira de valores altos sem quebrar
    // quem digita o valor com ponto decimal no teclado do celular.
    if (partes.length === 2 && /^\d{1,2}$/.test(ultimaParte)) {
      // Já está no formato decimal.
    } else {
      texto = partes.join("");
    }
  }

  const n = Number(texto);
  return Number.isFinite(n) ? n : 0;
};

export function comTempoLimite<T>(promessa: Promise<T>, milissegundos = 15000): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const temporizador = window.setTimeout(() => {
      reject(new Error("A conexão com o servidor demorou demais. Verifique sua internet e tente novamente."));
    }, milissegundos);

    promessa.then(
      (valor) => {
        window.clearTimeout(temporizador);
        resolve(valor);
      },
      (erro) => {
        window.clearTimeout(temporizador);
        reject(erro);
      }
    );
  });
}

export const inicioSemanaAtual = () => {
  const data = new Date();
  data.setHours(0, 0, 0, 0);
  data.setDate(data.getDate() - data.getDay());
  return data;
};

export const gerarSemanaPessoa = (offsetSemanas: number) => {
  const nomes = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const inicio = inicioSemanaAtual();
  inicio.setDate(inicio.getDate() + offsetSemanas * 7);

  return nomes.map((nome, index) => {
    const data = new Date(inicio);
    data.setDate(inicio.getDate() + index);
    const chave = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, "0")}-${String(data.getDate()).padStart(2, "0")}`;

    return {
      nome,
      chave,
      data: data.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
    };
  });
};

export const comprimirFoto = (arquivo: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onerror = () => reject(new Error("Não foi possível ler a foto."));
    leitor.onload = () => {
      const imagem = new Image();
      imagem.onerror = () => reject(new Error("Não foi possível processar a foto."));
      imagem.onload = () => {
        const limite = 1600;
        const escala = Math.min(1, limite / Math.max(imagem.naturalWidth || imagem.width, imagem.naturalHeight || imagem.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round((imagem.naturalWidth || imagem.width) * escala));
        canvas.height = Math.max(1, Math.round((imagem.naturalHeight || imagem.height) * escala));
        const contexto = canvas.getContext("2d");
        if (!contexto) {
          reject(new Error("Não foi possível preparar a foto."));
          return;
        }
        contexto.drawImage(imagem, 0, 0, canvas.width, canvas.height);
        // Mantém a foto com boa qualidade, mas reduz bastante o tamanho dos
        // dados salvos no aparelho (e do backup), poupando espaço de armazenamento.
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      imagem.src = String(leitor.result || "");
    };
    leitor.readAsDataURL(arquivo);
  });
