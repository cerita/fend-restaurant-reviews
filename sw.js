let filesToCache = [
    '/',
    'index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
]

self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).then(function (response) {
            if (response.status == 404) {
                return fetch('img/lost.gif');
            }
            return response;
        }).catch(function () {
            return new Response("Uh oh...That didn't quite work :/");
        })
    )
});

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('restaurant-reviews-v1').then(function (cache) {
            return cache.addAll(filesToCache)
        })
    );
});

self.addEventListener('fetch', function(event){
    caches.match(event.request).then(function(){
        if(response) return response;
        return fetch(event.request)
    })
});