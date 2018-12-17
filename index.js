self.addEventListener('install', function(event) {
  event.waitUntil(
    //cache main html, js, and json files for quick startup
    caches.open('restaurant-reviews-v1').then(function(cache){
      return cache.addAll([
        '/index.html',
        '/js/main.js',
        '/js/dbhelper.js',
        '/js/restaurant_info.js',
        '/restaurant.html',
        '/data/restaurants.json'
      ])
    }))
});

self.addEventListener('fetch', function(event) {
  console.log(event);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }else{
        let fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            let cacheIt = response.clone();

            caches.open('restaurant-reviews-v1')
              .then(function(cache) {
                cache.put(event.request, cacheIt);
              });

            return response;
          }
        );
      }
      })
    );
});
