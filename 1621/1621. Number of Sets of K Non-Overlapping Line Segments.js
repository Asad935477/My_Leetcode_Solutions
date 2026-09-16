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

     for (let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }

    for (let j = 1; j <= k; j++) {
        let sum = 0;

        for (let i = 1; i < n; i++) {
            sum = (sum + dp[i - 1][j - 1]) % MOD;
            dp[i][j] = (dp[i - 1][j] + sum) % MOD;
        }
    }
    return dp[n - 1][k];
}