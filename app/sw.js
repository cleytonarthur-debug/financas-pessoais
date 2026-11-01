// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-671ea8e59759';
const ARQUIVOS = ["./","./assets/index-B5_oE3hP.js","./assets/index-C6H7z4xc.js","./assets/index-DMgKB45g.css","./assets/index-Du8Y7Qbz.js","./assets/index-c2waxCC9.js","./assets/web-CTQTqgxC.js","./assets/web-CmCQ5LpZ.js","./assets/web-Df--Cb5m.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
