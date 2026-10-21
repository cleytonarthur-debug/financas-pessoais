// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-882cc9dd40eb';
const ARQUIVOS = ["./","./assets/index-Bd7_gB82.js","./assets/index-CV4T_UET.css","./assets/index-C_bjV19w.js","./assets/index-D__cJWyX.js","./assets/index-YG9zGIyg.js","./assets/web-C5Vttz91.js","./assets/web-DvtC0-y2.js","./assets/web-MsIsS_Ua.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
