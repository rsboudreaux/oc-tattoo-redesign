var cacheName = 'sw-v1'

const offlineUrl = 'offline/index.html'

this.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll([
            offlineUrl
        ]))
    )
})

this.addEventListener('fetch', e => {

    //This service worker won't touch the admin area and preview pages
    if (e.request.url.match(/wp-admin/) || e.request.url.match(/preview=true/)) {
        return;
    }

    if (e.request.mode === 'navigate' || (e.request.method === 'GET' && e.request.headers.get('accept').includes('text/html'))) {
        e.respondWith(fetch(e.request.url).catch(error => {
            return caches.match(offlineUrl)
        }))
    }
    return
})