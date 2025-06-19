/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i != 0 && nums[i - 1] == nums[i]) continue;
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum == 0) {
        let cur = [nums[i], nums[j++], nums[k--]];
        ans.push(cur);
        while (j < k && nums[j - 1] == nums[j]) j++;
        while (j < k && nums[k + 1] == nums[k]) k--;
      } else if (sum < 0) j++;
      else k--;
    }
  }
  return ans;
};
