// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-62ef35e46c2a';
const ARQUIVOS = ["./","./assets/index-B2MAdq0O.js","./assets/index-B76iBxo3.css","./assets/index-Bv9UZABd.js","./assets/index-DSyNeA11.js","./assets/index-lZHJlzZ9.js","./assets/web-ByNZCmv0.js","./assets/web-C-4M0TDM.js","./assets/web-DoP-HlCh.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
