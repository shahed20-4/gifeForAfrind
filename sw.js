const cacheName = "myAppCache-v1";
const assetsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
   // إذا فصلت JS
  "./icon-192.png",
  "./icon-512.png"
];

// تثبيت الكاش
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// تفعيل Service Worker
self.addEventListener("activate", event => {
  console.log("Service Worker activated");
});

// التقاط طلبات الشبكة
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});