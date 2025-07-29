/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = [];
  right = [];
  maxleft = 0;
  maxright = 0;
  sum = 0;
  for (let i = 1; i < height.length; i++) {
    maxleft = Math.max(maxleft, height[i]);
    left[i] = maxleft;
  }
  for (let i = height.length - 1; i >= 0; i--) {
    maxright = Math.max(maxright, height[i]);
    right[i] = maxright;
  }
  for (let i = 0; i < height.length; i++) {
    sum += Math.min(left[i], right[i]) - height[i];
  }
  return sum;
};
