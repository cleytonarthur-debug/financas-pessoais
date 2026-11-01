// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-0497ddadbb2a';
const ARQUIVOS = ["./","./assets/index-BsqJyoam.js","./assets/index-CrBsrJ49.js","./assets/index-DDsdOSfo.js","./assets/index-DsY3jnN8.js","./assets/index-G6snYN_S.css","./assets/web-BCyuyRiY.js","./assets/web-BpG_SffL.js","./assets/web-DQPP1xRh.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin || url.pathname.startsWith('/oauth')) return;
  if (url.searchParams.has('code') || url.searchParams.has('error')) return; // volta do login do Google
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((r) => r || fetch(e.request).catch(() => caches.match('./')))
  );
});
