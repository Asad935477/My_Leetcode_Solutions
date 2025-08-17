/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let countStack = [];
  let stringStack = [];
  let currentStr = "";
  let k = 0;

  for (let char of s) {
    if (!isNaN(char)) {
      k = k * 10 + parseInt(char);
    } else if (char === "[") {
      countStack.push(k);
      stringStack.push(currentStr);
      currentStr = "";
      k = 0;
    } else if (char === "]") {
      let repeatTimes = countStack.pop();
      let prevStr = stringStack.pop();
      currentStr = prevStr + currentStr.repeat(repeatTimes);
    } else {
      currentStr += char;
    }
  }
  return currentStr;
};
