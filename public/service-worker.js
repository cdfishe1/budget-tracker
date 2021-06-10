const FILES_TO_CACHE = [
    "/", 
    "/index.html", 
    "/index.js",
    "/db.js" ,
    "/favicon.ico", 
    "/styles.css", 
    "/icons/icon-192x192.png", 
    "/icons/icon-512x512.png"
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

// install listener for service worker
self.addEventListener("install", function (event) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        console.log("Your files were pre-cached successfully!");
        return cache.addAll(FILES_TO_CACHE);
      })
    );
  
    self.skipWaiting();
  });

  