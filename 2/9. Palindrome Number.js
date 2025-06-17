/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString();
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  let revNum = Number(rev);

  if (revNum === x) {
    return true;
  } else {
    return false;
  }
};
