/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  let step = [];
  step[1] = 1;
  step[2] = 2;
  for (let i = 3; i <= n; i++) {
    step[i] = step[i - 1] + step[i - 2];
  }
  return step[n];
};
