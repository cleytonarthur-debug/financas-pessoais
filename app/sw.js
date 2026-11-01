// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-11368bf4bdb8';
const ARQUIVOS = ["./","./assets/index-B4K_PNbJ.js","./assets/index-BRm8RAaF.js","./assets/index-BhYXCzRj.js","./assets/index-CzKFgO7l.css","./assets/index-D7i3SC8F.js","./assets/web-BHCTrYW-.js","./assets/web-CR5MByd1.js","./assets/web-mUokDrgE.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
