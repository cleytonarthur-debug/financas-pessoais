// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-0960b3de5fe8';
const ARQUIVOS = ["./","./assets/index-BIccC9kj.js","./assets/index-ClSstDzs.js","./assets/index-Qv_v_qMQ.js","./assets/index-SwrvG24O.css","./assets/index-x4oo8nWO.js","./assets/web-B-1ocg4Z.js","./assets/web-Bauljaam.js","./assets/web-CKB3BUtC.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
