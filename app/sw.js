// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-f949bd74b4d5';
const ARQUIVOS = ["./","./assets/index-BYy5qs_x.css","./assets/index-BfJdoOaH.js","./assets/index-Br5u7AUT.js","./assets/index-CC5NLs0V.js","./assets/index-KRQzse-C.js","./assets/web-BDVoPLR_.js","./assets/web-C7alpcyY.js","./assets/web-DOnRlhOG.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
