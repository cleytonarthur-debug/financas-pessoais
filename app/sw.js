// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-a35a149c61fc';
const ARQUIVOS = ["./","./assets/ia-Ba_UVJKb.js","./assets/index-2nBqdKNJ.js","./assets/index-BRrDxtkh.js","./assets/index-ByIkpFvj.css","./assets/index-Cp9dkxUK.js","./assets/index-DgvX7Flt.js","./assets/index-DjCO1f6G.js","./assets/index-oytB1ddi.js","./assets/node.browser-Cz3LgdOp.js","./assets/node.browser-la3z2k5p.js","./assets/ocr-DEVrgkfV.js","./assets/web-6-kCRSyP.js","./assets/web-CTYo0G2p.js","./assets/web-DazjjWdA.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest","./tesseract/lang/por.traineddata","./tesseract/tesseract-core-lstm.wasm.js","./tesseract/tesseract-core-simd-lstm.wasm.js","./tesseract/worker.min.js"];
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
