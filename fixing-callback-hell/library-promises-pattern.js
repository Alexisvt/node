/**
 * 
 * @param {string} a 
 * @param {string} b 
 */
function concat(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      var r = a + b;
      resolve(r);
    }, 0);
  });
}

/**
 * 
 * @param {string} a 
 */
function upper(a) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      var r = a.toUpperCase();
      resolve(r);
    }, 0);
  });
}

/**
 * 
 * @param {string} a 
 * @param {function(string): void} callback 
 */
function decor(a) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      var r = `*${a}*`;
      resolve(r);
    }, 0);
  });
}

module.exports = {
  decor,
  upper,
  concat,
};
