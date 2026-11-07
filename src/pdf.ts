// Gerador de PDF próprio do CGL (sem bibliotecas externas).

export type PdfImagem = { bytes: Uint8Array; largura: number; altura: number; nome: string };
export type PdfPagina = { conteudo: string; imagens: PdfImagem[] };

export const bytesTextoPdf = (valor: string) => {
  const mapa: Record<string, number> = {
    "€": 0x80, "‚": 0x82, "ƒ": 0x83, "„": 0x84, "…": 0x85, "†": 0x86, "‡": 0x87,
    "ˆ": 0x88, "‰": 0x89, "Š": 0x8a, "‹": 0x8b, "Œ": 0x8c, "Ž": 0x8e,
    "‘": 0x91, "’": 0x92, "“": 0x93, "”": 0x94, "•": 0x95, "–": 0x96, "—": 0x97,
    "˜": 0x98, "™": 0x99, "š": 0x9a, "›": 0x9b, "œ": 0x9c, "ž": 0x9e, "Ÿ": 0x9f,
    "Á": 0xc1, "À": 0xc0, "Â": 0xc2, "Ã": 0xc3, "Ä": 0xc4, "Ç": 0xc7, "É": 0xc9,
    "Ê": 0xca, "Í": 0xcd, "Ó": 0xd3, "Ô": 0xd4, "Õ": 0xd5, "Ú": 0xda, "á": 0xe1,
    "à": 0xe0, "â": 0xe2, "ã": 0xe3, "ä": 0xe4, "ç": 0xe7, "é": 0xe9, "ê": 0xea,
    "í": 0xed, "ó": 0xf3, "ô": 0xf4, "õ": 0xf5, "ú": 0xfa, "ñ": 0xf1, "Ñ": 0xd1,
    "ü": 0xfc, "Ü": 0xdc, "º": 0xba, "ª": 0xaa
  };
  const bytes: number[] = [];
  for (const char of String(valor)) {
    const code = char.codePointAt(0) ?? 32;
    bytes.push(code <= 255 ? (mapa[char] ?? code) : 63);
  }
  return new Uint8Array(bytes);
};

export const unirBytesPdf = (partes: Uint8Array[]) => {
  const total = partes.reduce((soma, parte) => soma + parte.length, 0);
  const resultado = new Uint8Array(total);
  let posicao = 0;
  for (const parte of partes) {
    resultado.set(parte, posicao);
    posicao += parte.length;
  }
  return resultado;
};

export const objetoPdf = (numeroObjeto: number, corpo: Uint8Array) =>
  unirBytesPdf([bytesTextoPdf(`${numeroObjeto} 0 obj\n`), corpo, bytesTextoPdf("\nendobj\n")]);

export const escaparPdf = (valor: string) => String(valor ?? "").replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

export const quebrarTextoPdf = (valor: string, maxChars = 86) => {
  const resultado: string[] = [];
  for (const paragrafo of String(valor ?? "").split(/\r?\n/)) {
    const palavras = paragrafo.split(/\s+/).filter(Boolean);
    if (!palavras.length) { resultado.push(""); continue; }
    let linha = "";
    for (const palavra of palavras) {
      const tentativa = linha ? `${linha} ${palavra}` : palavra;
      if (tentativa.length > maxChars && linha) {
        resultado.push(linha);
        linha = palavra;
      } else linha = tentativa;
    }
    if (linha) resultado.push(linha);
  }
  return resultado;
};

export const prepararImagemPdf = (url: string, nome: string): Promise<PdfImagem | null> =>
  new Promise((resolve) => {
    if (!url) { resolve(null); return; }
    const imagem = new Image();
    imagem.onload = () => {
      try {
        const max = 900;
        const escala = Math.min(1, max / Math.max(imagem.naturalWidth || 1, imagem.naturalHeight || 1));
        const largura = Math.max(1, Math.round((imagem.naturalWidth || 1) * escala));
        const altura = Math.max(1, Math.round((imagem.naturalHeight || 1) * escala));
        const canvas = document.createElement("canvas");
        canvas.width = largura;
        canvas.height = altura;
        const ctx = canvas.getContext("2d");
        if (!ctx) { resolve(null); return; }
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, largura, altura);
        ctx.drawImage(imagem, 0, 0, largura, altura);
        const jpeg = canvas.toDataURL("image/jpeg", 0.82);
        const base64 = jpeg.split(",")[1] || "";
        const binario = atob(base64);
        const bytes = new Uint8Array(binario.length);
        for (let i = 0; i < binario.length; i++) bytes[i] = binario.charCodeAt(i);
        resolve({ bytes, largura, altura, nome });
      } catch {
        resolve(null);
      }
    };
    imagem.onerror = () => resolve(null);
    imagem.src = url;
  });

export const criarPdf = (paginas: PdfPagina[]) => {
  const totalPaginas = paginas.length || 1;
  const catalogoId = 1;
  const paginasId = 2;
  const fonteId = 3;
  const fonteNegritoId = 4;
  let proximoId = 5;
  const paginaIds: number[] = [];
  const conteudoIds: number[] = [];
  const imagemIdsPorPagina: number[][] = [];

  for (const pagina of paginas) {
    paginaIds.push(proximoId++);
    conteudoIds.push(proximoId++);
    const ids: number[] = [];
    for (let i = 0; i < pagina.imagens.length; i++) ids.push(proximoId++);
    imagemIdsPorPagina.push(ids);
  }

  const objetos: Uint8Array[] = [];
  objetos[catalogoId] = objetoPdf(catalogoId, bytesTextoPdf(`<< /Type /Catalog /Pages ${paginasId} 0 R >>`));
  objetos[paginasId] = objetoPdf(paginasId, bytesTextoPdf(`<< /Type /Pages /Kids [${paginaIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${totalPaginas} >>`));
  objetos[fonteId] = objetoPdf(fonteId, bytesTextoPdf("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>"));
  objetos[fonteNegritoId] = objetoPdf(fonteNegritoId, bytesTextoPdf("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>"));

  paginas.forEach((pagina, indicePagina) => {
    const xobjects = imagemIdsPorPagina[indicePagina].map((id, i) => `/Im${i + 1} ${id} 0 R`).join(" ");
    const recursos = `<< /Font << /F1 ${fonteId} 0 R /F2 ${fonteNegritoId} 0 R >>${xobjects ? ` /XObject << ${xobjects} >>` : ""} >>`;
    objetos[paginaIds[indicePagina]] = objetoPdf(paginaIds[indicePagina], bytesTextoPdf(`<< /Type /Page /Parent ${paginasId} 0 R /MediaBox [0 0 595 842] /Resources ${recursos} /Contents ${conteudoIds[indicePagina]} 0 R >>`));
    const dados = bytesTextoPdf(pagina.conteudo);
    objetos[conteudoIds[indicePagina]] = objetoPdf(conteudoIds[indicePagina], unirBytesPdf([bytesTextoPdf(`<< /Length ${dados.length} >>\nstream\n`), dados, bytesTextoPdf("\nendstream") ]));
    pagina.imagens.forEach((imagem, i) => {
      const id = imagemIdsPorPagina[indicePagina][i];
      objetos[id] = objetoPdf(id, unirBytesPdf([
        bytesTextoPdf(`<< /Type /XObject /Subtype /Image /Width ${imagem.largura} /Height ${imagem.altura} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imagem.bytes.length} >>\nstream\n`),
        imagem.bytes,
        bytesTextoPdf("\nendstream")
      ]));
    });
  });

  const partes: Uint8Array[] = [bytesTextoPdf("%PDF-1.4\n%\xFF\xFF\xFF\xFF\n")];
  const offsets: number[] = new Array(proximoId).fill(0);
  let deslocamento = partes[0].length;
  for (let id = 1; id < proximoId; id++) {
    offsets[id] = deslocamento;
    partes.push(objetos[id]);
    deslocamento += objetos[id].length;
  }
  const xref = deslocamento;
  partes.push(bytesTextoPdf(`xref\n0 ${proximoId}\n0000000000 65535 f \n${Array.from({ length: proximoId - 1 }, (_, i) => `${String(offsets[i + 1]).padStart(10, "0")} 00000 n \n`).join("")}trailer\n<< /Size ${proximoId} /Root ${catalogoId} 0 R >>\nstartxref\n${xref}\n%%EOF`));
  const partesBlob = partes.map((parte) => {
    const copia = new Uint8Array(parte.byteLength);
    copia.set(parte);
    return copia.buffer;
  });
  return new Blob(partesBlob, { type: "application/pdf" });
};

export const linhaPdf = (texto: string, x: number, y: number, tamanho = 10, negrito = false) =>
  `0 0 0 rg\nBT /${negrito ? "F2" : "F1"} ${tamanho} Tf 0 Tr ${x} ${y} Td (${escaparPdf(texto)}) Tj ET\n`;

export const linhaPdfBranca = (texto: string, x: number, y: number, tamanho = 10, negrito = false) =>
  `1 1 1 rg\nBT /${negrito ? "F2" : "F1"} ${tamanho} Tf 0 Tr ${x} ${y} Td (${escaparPdf(texto)}) Tj ET\n`;

// Separador visual em círculo para evitar que o caractere "•" seja substituído por "?" em alguns leitores de PDF.
export const tituloFotosPdf = (x: number, y: number, quantidade: number) => {
  const tamanho = 8.5;
  const raio = 1.55;
  const centroX = x + 44;
  const centroY = y + 2.6;
  const k = raio * 0.5522848;
  const cx = centroX;
  const cy = centroY;
  const circulo = `1 1 1 rg\n${(cx + raio).toFixed(2)} ${cy.toFixed(2)} m\n${(cx + raio).toFixed(2)} ${(cy + k).toFixed(2)} ${(cx + k).toFixed(2)} ${(cy + raio).toFixed(2)} ${cx.toFixed(2)} ${(cy + raio).toFixed(2)} c\n${(cx - k).toFixed(2)} ${(cy + raio).toFixed(2)} ${(cx - raio).toFixed(2)} ${(cy + k).toFixed(2)} ${(cx - raio).toFixed(2)} ${cy.toFixed(2)} c\n${(cx - raio).toFixed(2)} ${(cy - k).toFixed(2)} ${(cx - k).toFixed(2)} ${(cy - raio).toFixed(2)} ${cx.toFixed(2)} ${(cy - raio).toFixed(2)} c\n${(cx + k).toFixed(2)} ${(cy - raio).toFixed(2)} ${(cx + raio).toFixed(2)} ${(cy - k).toFixed(2)} ${(cx + raio).toFixed(2)} ${cy.toFixed(2)} c\nf\n`;
  return `${linhaPdfBranca("FOTOS", x, y, tamanho, true)}${circulo}${linhaPdfBranca(String(quantidade), x + 51, y, tamanho, true)}`;
};
