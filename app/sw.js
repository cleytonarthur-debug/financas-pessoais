// Gerado automaticamente por scripts/gerar-sw.mjs
const CACHE = 'lancamentos-139b068eb99e';
const ARQUIVOS = ["./","./assets/ia-uon8_1hD.js","./assets/index-BTSkDaNA.js","./assets/index-ByIkpFvj.css","./assets/index-Cx_fC-bn.js","./assets/index-D989pyAw.js","./assets/index-DYS4k5cM.js","./assets/index-DgvX7Flt.js","./assets/index-Di2iXBgn.js","./assets/node.browser-BrA6ffNL.js","./assets/node.browser-CFB08NGG.js","./assets/ocr-hQvQ1qq7.js","./assets/web-CEqoP0cj.js","./assets/web-CHt1iZ57.js","./assets/web-CkjgiYrU.js","./icone-192.png","./icone-512.png","./icone.svg","./index.html","./manifest.webmanifest","./tesseract/lang/por.traineddata.gz","./tesseract/tesseract-core-lstm.wasm.js","./tesseract/tesseract-core-simd-lstm.wasm.js","./tesseract/worker.min.js"];
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
