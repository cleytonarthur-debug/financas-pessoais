// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-e14f4acbd41f';
const ARQUIVOS = ["./","./assets/index-CBShQkHA.js","./assets/index-CRjKdF0Y.js","./assets/index-CV4T_UET.css","./assets/index-Z6BRmoSe.js","./assets/index-gz1-4F6h.js","./assets/web-B6kjfsh0.js","./assets/web-DDzTVq0n.js","./assets/web-DbxXg4xo.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
