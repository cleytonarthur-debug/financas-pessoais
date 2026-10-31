// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-f45c379898b3';
const ARQUIVOS = ["./","./assets/index-Bj1nbcC1.js","./assets/index-Bj5C-vXh.css","./assets/index-Crvu3-wY.js","./assets/index-CyhS8z0Y.js","./assets/index-DqjxF_T-.js","./assets/web-CDuLXY-9.js","./assets/web-CshgSN8k.js","./assets/web-DVA9z-mg.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
