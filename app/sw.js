// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-3ae85f932d79';
const ARQUIVOS = ["./","./assets/index-BXjdP5C3.js","./assets/index-Bq80ezFf.css","./assets/index-DPbnGOr4.js","./assets/index-DpemK9xC.js","./assets/index-DrNvfHlB.js","./assets/web-0q2aHGj9.js","./assets/web-BjwtHWLH.js","./assets/web-OQKtC4Ky.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
