/**
 * @param {number[]} nums
 * @return {number}
 */

var minSwaps = function(nums) {
    const digitSum = (x) => {
        let s = 0;
        while (x > 0) {
            s += x % 10;
            x = Math.floor(x / 10);
        }
        return s;
    };
    const n = nums.length;

};