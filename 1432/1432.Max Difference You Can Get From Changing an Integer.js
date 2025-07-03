/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  let string = num + "";
  let maxInt = string;
  for (let c of maxInt) {
    if (c !== "9") {
      maxInt = maxInt.split(c).join("9");
      break;
    }
  }
  let minInt = string;
  if (minInt[0] !== "1") {
    let first = minInt[0];
    minInt = minInt.split(first).join("1");
  } else {
    for (let i = 1; i < minInt.length; i++) {
      if (minInt[i] !== "0" && minInt[i] !== "1") {
        let pointer = minInt[i];
        minInt = minInt.split(pointer).join("0");
        break;
      }
    }
  }
  let a = maxInt - "0",
    b = minInt - "0";
  return a - b;
};
