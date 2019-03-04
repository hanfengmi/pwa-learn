var cacheName = 'sw-0-0-4';
var cacheFiles = [
    '/',
    './index.html',
    './js/jquery3.min.js',
    './js/index.js',
    './css/style.css',
];
// sw.js
self.addEventListener('install', function (e) {
    console.log('Service Worker 状态： install');
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(cache => {
            return cache || fetch(event.request);
        }).catch(err => {
            console.log(err);
            return fetch(e.request);
        })
    );
});

self.addEventListener('activate', function (e) {
    console.log('Service Worker 状态： activate');
    var cachePromise = caches.keys().then(function (keys) {
        return Promise.all(keys.map(function (key) {
            if (key !== cacheName) {
                return caches.delete(key);
            }
        }));
    })
    e.waitUntil(cachePromise);
    return self.clients.claim();
});
