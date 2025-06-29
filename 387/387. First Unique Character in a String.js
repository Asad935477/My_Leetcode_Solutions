/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let charCount = new Map();

  // Count occurrences of each character
  for (let char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first character with a count of 1
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }

  return -1; // Return -1 if no unique character exists
};
