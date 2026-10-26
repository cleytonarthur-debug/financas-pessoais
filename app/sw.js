// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-48a4cd3b6219';
const ARQUIVOS = ["./","./assets/index-BomwPDvW.js","./assets/index-CMh9Qx08.js","./assets/index-CmbucODt.js","./assets/index-DWcftH_E.css","./assets/index-aT-uyd6V.js","./assets/web-Bht108cA.js","./assets/web-CW1mLL4T.js","./assets/web-n_nKpAc_.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
