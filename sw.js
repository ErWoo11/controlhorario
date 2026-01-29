const CACHE_NAME = 'control-horario-v1';
const urlsToCache = [
  '/',
  '/controlhorario/',
  '/controlhorario/index.html',
  '/controlhorario/admin.html',
  '/controlhorario/registro.html',
  '/controlhorario/vehiculo.html',
  '/controlhorario/logo.png',
  '/controlhorario/logo-admin.png',
  '/controlhorario/logo-admin-512.png',
  '/controlhorario/fondo.png',
  '/controlhorario/fondo-ondas.png',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js',
  'https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});