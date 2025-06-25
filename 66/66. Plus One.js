/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let num = BigInt(digits.join(""));
  let join = (num + 1n).toString().split("").map(Number);
  return join;
};
