// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-8fe8f661142b';
const ARQUIVOS = ["./","./assets/index-BGD33DLU.js","./assets/index-BXZqZoUh.js","./assets/index-CzKFgO7l.css","./assets/index-DLe0H-MP.js","./assets/index-tKYiszkK.js","./assets/web--HGoAZ6B.js","./assets/web-CCH_X8k1.js","./assets/web-CvH-DOdw.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
