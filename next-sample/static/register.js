// @flow

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw-precache.js', {scope: '/'})
    .then(reg => {
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function (error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
}