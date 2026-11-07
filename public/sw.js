// Service worker do CGL Offline.
//
// Estratégias:
// - Páginas (navegação): rede primeiro, com limite de tempo. Online, o app sempre abre
//   na versão mais nova; sem internet (ou com sinal ruim) abre a cópia guardada.
// - /assets/* (arquivos com hash no nome do Vite): cache primeiro. O nome muda a cada
//   versão, então o conteúdo de um mesmo endereço nunca muda.
// - Demais arquivos (ícones, manifest): usa a cópia guardada e atualiza em segundo plano.
//
// Ao instalar, o worker já guarda o index.html e os arquivos do app que ele referencia,
// para o app abrir offline logo depois do primeiro acesso.

const SHELL_CACHE = "cgl-shell-v2";
const ASSET_CACHE = "cgl-assets-v1";
const CACHES_ATUAIS = [SHELL_CACHE, ASSET_CACHE];

const ARQUIVOS_BASE = ["/manifest.json", "/192x192.png", "/512x512.png", "/favicon.svg"];
const TEMPO_LIMITE_REDE_MS = 4000;
const MAX_ASSETS_GUARDADOS = 40;

function extrairAssets(html) {
  const encontrados = new Set();
  for (const m of html.matchAll(/(?:src|href)=["'](\/assets\/[^"']+)["']/g)) {
    encontrados.add(m[1]);
  }
  return [...encontrados];
}

async function limitarAssets(cache) {
  const chaves = await cache.keys();
  const excesso = chaves.length - MAX_ASSETS_GUARDADOS;
  // keys() devolve em ordem de inserção: apaga os mais antigos primeiro.
  for (let i = 0; i < excesso; i++) await cache.delete(chaves[i]);
}

async function guardarAssetsDaPagina(html) {
  const urls = extrairAssets(html);
  if (!urls.length) return;
  const cache = await caches.open(ASSET_CACHE);
  await Promise.allSettled(
    urls.map(async (url) => {
      if (await cache.match(url)) return;
      const resposta = await fetch(url);
      if (resposta.ok) await cache.put(url, resposta);
    })
  );
  await limitarAssets(cache);
}

async function preCache() {
  const shell = await caches.open(SHELL_CACHE);

  // Falhas aqui (por exemplo, sem internet na instalação) não devem quebrar o worker.
  try {
    const resposta = await fetch("/index.html", { cache: "reload" });
    if (resposta.ok) {
      const html = await resposta.clone().text();
      await shell.put("/index.html", resposta.clone());
      await shell.put("/", resposta);
      await guardarAssetsDaPagina(html);
    }
  } catch {
    // Será guardado na primeira navegação online.
  }

  await Promise.allSettled(ARQUIVOS_BASE.map((url) => shell.add(url)));
}

self.addEventListener("install", (event) => {
  event.waitUntil(preCache());
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((nomes) =>
        Promise.all(nomes.filter((nome) => !CACHES_ATUAIS.includes(nome)).map((nome) => caches.delete(nome)))
      )
  );
  self.clients.claim();
});

async function abrirPagina(event) {
  const cache = await caches.open(SHELL_CACHE);

  const rede = fetch(event.request).then(async (resposta) => {
    if (resposta.ok) {
      await cache.put("/index.html", resposta.clone());
      const html = await resposta.clone().text();
      await guardarAssetsDaPagina(html);
    }
    return resposta;
  });
  // Mantém o worker vivo para terminar de atualizar o cache, mesmo se a rede demorar.
  event.waitUntil(rede.catch(() => undefined));

  const limite = new Promise((_, rejeitar) => setTimeout(rejeitar, TEMPO_LIMITE_REDE_MS));

  try {
    return await Promise.race([rede, limite]);
  } catch {
    const guardada = (await cache.match("/index.html")) || (await cache.match("/"));
    // Sem cópia guardada, só resta esperar a rede.
    return guardada || rede;
  }
}

async function cachePrimeiro(request) {
  const cache = await caches.open(ASSET_CACHE);
  const guardada = await cache.match(request);
  if (guardada) return guardada;

  const resposta = await fetch(request);
  if (resposta.ok) {
    await cache.put(request, resposta.clone());
    await limitarAssets(cache);
  }
  return resposta;
}

async function guardadaEAtualiza(event) {
  const cache = await caches.open(SHELL_CACHE);
  const guardada = await cache.match(event.request);

  const rede = fetch(event.request)
    .then(async (resposta) => {
      if (resposta.ok) await cache.put(event.request, resposta.clone());
      return resposta;
    })
    .catch(() => null);
  event.waitUntil(rede);

  return guardada || (await rede) || Response.error();
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname === "/sw.js") return;

  if (request.mode === "navigate") {
    event.respondWith(abrirPagina(event));
    return;
  }

  if (url.pathname.startsWith("/assets/")) {
    event.respondWith(cachePrimeiro(request));
    return;
  }

  event.respondWith(guardadaEAtualiza(event));
});
