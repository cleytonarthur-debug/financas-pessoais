// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-bd47a725b42d';
const ARQUIVOS = ["./","./assets/index-BS4tjG-8.js","./assets/index-KiBffQKo.js","./assets/index-_x8lyrUT.css","./assets/index-awhNMmLT.js","./assets/index-tI5hMV2e.js","./assets/web-Bnf4f5mH.js","./assets/web-Ct0IHcWQ.js","./assets/web-DHrzy_0A.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest"];
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
