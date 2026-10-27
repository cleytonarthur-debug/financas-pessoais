// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-03e480d7444e';
const ARQUIVOS = ["./","./assets/index-2SOvhcwv.js","./assets/index-D7ZGg6G9.css","./assets/index-DCu3ElCg.js","./assets/index-DSbLrvPy.js","./assets/index-tyRsj7kV.js","./assets/web-Cs86bjwC.js","./assets/web-DYemNHYg.js","./assets/web-DofULU0E.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
