// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-3d6ff537aa7b';
const ARQUIVOS = ["./","./assets/ia-BRQUWn8D.js","./assets/index-B1NUJBks.js","./assets/index-B4BWyYsx.js","./assets/index-ByIkpFvj.css","./assets/index-DE-xiR4o.js","./assets/index-DgvX7Flt.js","./assets/index-Dzdpm1Ht.js","./assets/index-bx07J02U.js","./assets/node.browser-Bj-WsVsN.js","./assets/node.browser-CrdUOca9.js","./assets/ocr-DDMru0SR.js","./assets/web-CrDhm-d-.js","./assets/web-D4MLx1e7.js","./assets/web-Dqwy1Yoy.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest","./tesseract/lang/por.traineddata.gz","./tesseract/tesseract-core-lstm.wasm.js","./tesseract/tesseract-core-simd-lstm.wasm.js","./tesseract/worker.min.js"];
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
