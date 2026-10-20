// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-d1dd8a377a43';
const ARQUIVOS = ["./","./assets/index-BlbtG0kP.js","./assets/index-CxxcDrHN.js","./assets/index-D2_7PYXQ.js","./assets/index-DI4WoLDx.js","./assets/index-_x8lyrUT.css","./assets/web-BSdKu9TZ.js","./assets/web-BWl7BmR_.js","./assets/web-ybmeFqoW.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
