/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // This is the main function that initiates the solving process.
  // It calls a recursive helper function to do the actual work.
  solve(board);
};

/**
 * A helper function to check if a number can be placed at a specific position.
 * @param {character[][]} board The Sudoku board.
 * @param {number} row The row index.
 * @param {number} col The column index.
 * @param {character} num The number (as a string) to check.
 * @returns {boolean} True if the placement is valid, false otherwise.
 */
function isValid(board, row, col, num) {
  // Check the current row and column
  for (let i = 0; i < 9; i++) {
    // If the number already exists in the row, it's invalid.
    if (board[row][i] === num) {
      return false;
    }
    // If the number already exists in the column, it's invalid.
    if (board[i][col] === num) {
      return false;
    }
  }

  // Check the current 3x3 sub-box
  const boxRowStart = Math.floor(row / 3) * 3;
  const boxColStart = Math.floor(col / 3) * 3;

  for (let r = boxRowStart; r < boxRowStart + 3; r++) {
    for (let c = boxColStart; c < boxColStart + 3; c++) {
      // If the number already exists in the 3x3 box, it's invalid.
      if (board[r][c] === num) {
        return false;
      }
    }
  }

  // If the number doesn't exist in the row, column, or box, the placement is valid.
  return true;
}

/**
 * The recursive backtracking function to solve the Sudoku.
 * @param {character[][]} board The Sudoku board.
 * @returns {boolean} True if a solution is found, false otherwise.
 */
function solve(board) {
  // Iterate through every cell on the board.
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      // Find an empty cell (marked with '.')
      if (board[r][c] === ".") {
        // Try placing numbers '1' through '9' in the empty cell.
        for (let num = 1; num <= 9; num++) {
          const charNum = String(num);

          // Check if the current number is a valid placement.
          if (isValid(board, r, c, charNum)) {
            // If it's valid, place the number on the board.
            board[r][c] = charNum;

            // Recursively call solve() to try and solve the rest of the puzzle.
            // If the recursive call returns true, it means a solution was found.
            if (solve(board)) {
              return true; // Propagate true up the call stack
            } else {
              // If it returns false, it means this path was a dead end.
              // We need to "backtrack" by undoing our choice.
              board[r][c] = ".";
            }
          }
        }
        // If we've tried all numbers and none of them led to a solution,
        // this puzzle state is unsolvable. Return false to backtrack.
        return false;
      }
    }
  }
  // If we iterate through the entire board and find no empty cells,
  // it means the puzzle is solved!
  return true;
}
