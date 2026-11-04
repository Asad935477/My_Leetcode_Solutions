/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, x, k) {
    const n = nums.length;
    const sorted = Int32Array.from(nums).sort();
    let m = 0;
    for (let i = 0; i < n; i++) {
        if (m === 0 || sorted[i] !== sorted[m - 1]) {
            sorted[m++] = sorted[i];
        }
    }
    const vals = sorted;
    const rk = new Int32Array(n);
    for (let i = 0; i < n; i++) {
        let lo = 0, hi = m - 1;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (vals[mid] < nums[i]) lo = mid + 1;
            else hi = mid;
        }
        rk[i] = lo + 1;
    }

};