/**
 * 
 * @param {string} a 
 * @param {string} b 
 * @param {function(string): void} callback 
 */
function concat(a, b, callback) {
  setTimeout(function() {
    var r = a + b;
    callback(r);
  }, 0);
}

/**
 * 
 * @param {string} a 
 * @param {function(string): void} callback 
 */
function upper(a, callback) {
  setTimeout(function() {
    var r = a.toUpperCase();
    callback(r);
  }, 0);
}

/**
 * 
 * @param {string} a 
 * @param {function(string): void} callback 
 */
function decor(a, callback) {
  setTimeout(function() {
    var r = `*${a}*`;
    callback(r);
  }, 0);
}

module.exports = {
  decor,
  upper,
  concat,
};
