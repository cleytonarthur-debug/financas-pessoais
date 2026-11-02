// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-396f57754014';
const ARQUIVOS = ["./","./assets/index-B1g2pEs7.js","./assets/index-BBz79vBS.js","./assets/index-CpYPF9cB.js","./assets/index-D7VC6-Ph.css","./assets/index-s0Hk-j6r.js","./assets/web-BvkV0SaZ.js","./assets/web-CT0vuq5_.js","./assets/web-CwFPF28G.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
