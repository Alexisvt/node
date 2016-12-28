// @flow

self.addEventListener('fetch', event => {

  event.respondWith(
    new Response('hola mundo')
  );

});