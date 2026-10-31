// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-7b9a701e2bfc';
const ARQUIVOS = ["./","./assets/index-BFDfoHu6.js","./assets/index-BboN9AuX.js","./assets/index-CpXVP6F8.js","./assets/index-DIVSDqOL.js","./assets/index-Dunezbaa.css","./assets/web-CYhgdg9l.js","./assets/web-D4l8_XMU.js","./assets/web-epIvE_Cl.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
