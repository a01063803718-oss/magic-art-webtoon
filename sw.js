const CACHE='magic-art-v2-12-auto-resume';
const FILES=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg','./cover-art.png','./scene-001.png','./scene-002.png','./scene-003.png', './bookmark-art-01.jpg', './bookmark-art-02.jpg', './bookmark-art-03.jpg', './bookmark-art-04.jpg', './bookmark-art-05.jpg', './bookmark-art-06.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(CACHE).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request)))});
