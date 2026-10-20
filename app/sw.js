// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-f0b259fd8498';
const ARQUIVOS = ["./","./assets/ia-GF0k25aX.js","./assets/index-8aRbWpeK.js","./assets/index-BAyueTLq.js","./assets/index-ByIkpFvj.css","./assets/index-CHoKq6xe.js","./assets/index-CewFLh7W.js","./assets/index-DJcIOtr8.js","./assets/index-DgvX7Flt.js","./assets/node.browser-28-gbU5P.js","./assets/node.browser-VubrDWho.js","./assets/ocr-BPX8Tb28.js","./assets/web-BSZzaUNr.js","./assets/web-tbCYuY_L.js","./assets/web-vCOgagT2.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest","./tesseract/lang/por.traineddata","./tesseract/tesseract-core-lstm.wasm.js","./tesseract/tesseract-core-simd-lstm.wasm.js","./tesseract/worker.min.js"];
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
