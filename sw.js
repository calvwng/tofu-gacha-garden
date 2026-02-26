const CACHE_NAME = 'tofu-gacha-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './js/main.js',
  './js/gacha-data.js',
  './js/interactions.js',
  './js/rendering.js',
  './js/state.js',
  './assets/tofu-capsule.png',
  './assets/tofu-cozy.png',
  './assets/tofus-derp.png',
  './assets/tofus-event-planner.png',
  './assets/tofus-gardenia.png',
  './assets/tofus-har-gow.png',
  './assets/tofus-korea.png',
  './assets/tofus-kyoto.png',
  './assets/tofus-peony.png',
  './assets/tofus-ramen.png',
  './assets/tofus-sleep.png',
  './assets/tofus-sunflower.png',
  './assets/tofus-tech.png',
  './assets/tofus-tomago.png',
  './assets/tofus-valentine.png',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js',
  'https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;600&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  // Runtime caching for Google Fonts (gstatic.com)
  if (requestUrl.hostname === 'fonts.gstatic.com') {
      event.respondWith(
          caches.open(CACHE_NAME).then(cache => {
              return cache.match(event.request).then(response => {
                  if (response) return response;
                  return fetch(event.request).then(networkResponse => {
                      cache.put(event.request, networkResponse.clone());
                      return networkResponse;
                  });
              });
          })
      );
      return;
  }

  // Cache-first strategy for everything else
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
