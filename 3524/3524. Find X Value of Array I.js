/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 
var resultArray = function(nums, k) {
    const result = new Array(k).fill(0);
    let state = new Array(k).fill(0);
    for (const value of nums) {
        const rem = value % k;
        const nextState = new Array(k).fill(0);
        for (let r = 0; r < k; r++) {
            const newRem = (r * rem) % k;
            nextState[newRem] += state[r];
            result[newRem] += state[r];
        }
        nextState[rem]++;
        result[rem]++;
        state = nextState;
    }
    return result;
};