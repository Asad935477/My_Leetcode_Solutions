/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var numberOfSets = function(n, k) {
    const MOD = 1000000007;
    const  dp = Array.from(
        { length: n },
        () => new Array(k + 1).fill(0)
    );
}