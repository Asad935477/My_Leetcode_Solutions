/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxSum = function(nums, k) {
    const b = new Array(30).fill(0);
    const mod = 1000000007n;
    let ans = 0n;
    
    for (const x of nums)
        for (let i = 0; i < 30; i++)
            if (x & (1 << i)) b[i]++;

    while (k-- > 0) {
        let x = 0n;
        for (let i = 0; i < 30; i++) {
            if (b[i] > 0) {
                x |= 1n << BigInt(i);
                b[i]--;
            }
        }
        ans = (ans + x * x) % mod;
    }
    
    return Number(ans);

};