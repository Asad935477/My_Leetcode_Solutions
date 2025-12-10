/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) {
    return "0";
  }
  let result = "";
  if ((numerator < 0) ^ (denominator < 0)) {
    result += "-";
  }
  let num = Math.abs(numerator);
  den = Math.abs(denominator);
  result += Math.floor(num / den);
  let remainder = num % den;
  if (remainder === 0) {
    return result;
  }
  result += ".";
  const remainderMap = new Map();
  while (remainder !== 0) {
    if (remainderMap.has(remainder)) {
      const startIndex = remainderMap.get(remainder);
      const nonRepeatingPart = result.substring(0, startIndex);
      const repeatingPart = result.substring(startIndex);
      return `${nonRepeatingPart}(${repeatingPart})`;
    }
    remainderMap.set(remainder, result.length);
    remainder *= 10;
    result += Math.floor(remainder / den);
    remainder %= den;
  }
  return result;
};
