// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-79043fa727c7';
const ARQUIVOS = ["./","./assets/index-B80eRxGw.js","./assets/index-BosylAQC.js","./assets/index-Bz03TqkU.js","./assets/index-Dp_fylVA.js","./assets/index-dzd5vpeo.css","./assets/web-BbPeZWvw.js","./assets/web-MDexs_7n.js","./assets/web-ixMiwMNs.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
