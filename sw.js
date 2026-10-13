// Dialyzer Match v1.1: no remote CDN or patient data is stored.
const CACHE = 'dialyzer-match-offline-v11';
const PRECACHE = ['./index.html', './sw.js'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE)
    .then(cache => cache.addAll(PRECACHE))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('dialyzer-match-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if(request.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  if(request.mode === 'navigate') {
    event.respondWith(caches.open(CACHE).then(async cache => {
      const cached = await cache.match('./index.html');
      if(cached) return cached;
      return fetch(request);
    }));
    return;
  }
  // Only local files controlled by this PWA. Never cache other-site requests.
  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
