/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var binarySearch = function (nums, target, isStart) {
  let first = 0,
    last = nums.length - 1,
    ans = -1;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (nums[mid] == target) {
      ans = mid;
      if (isStart) last = mid - 1;
      else first = mid + 1;
    } else if (nums[mid] < target) first = mid + 1;
    else last = mid - 1;
  }
  return ans;
};
var searchRange = function (nums, target) {
  let start = binarySearch(nums, target, true);
  let end = binarySearch(nums, target, false);
  return [start, end];
};
