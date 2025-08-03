/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let tri = [];
  for (let i = 0; i < numRows; i++) {
    tri[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        tri[i][j] = 1;
      } else {
        tri[i][j] = tri[i - 1][j - 1] + tri[i - 1][j];
      }
    }
  }
  return tri;
};
