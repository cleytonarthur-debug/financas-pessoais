// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-d39900096b24';
const ARQUIVOS = ["./","./assets/index-BV4sF8RW.js","./assets/index-BvGvNiYM.js","./assets/index-DlGp0UTw.js","./assets/index-DnkeQ3xn.js","./assets/index-u7X3nxcV.css","./assets/web-0AaX5AVr.js","./assets/web-Bdipd5jP.js","./assets/web-DDkImQAU.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
