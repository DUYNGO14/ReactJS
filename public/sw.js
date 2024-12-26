const CACHE_NAME = 'vite-react-cache-v1';
const ASSETS = [
  '/offline.html',
  '/offline.svg', // Đảm bảo thêm tệp offline.svg vào danh sách cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        if (event.request.destination === 'image') {
          return caches.match('/offline.svg'); // Trả về hình ảnh offline nếu không có mạng
        }
        if (event.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
      });
    })
  );
});
