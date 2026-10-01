/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    if (s.length % 2 !== 0) return false;

    const stack = new Array(s.length);
    let head = 0;

};