/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */

var maxSumOfSquares = function(num, sum) {
    if (sum > 9 * num) return "";
    let q = Math.floor(sum / 9);
    let r = sum % 9;

}