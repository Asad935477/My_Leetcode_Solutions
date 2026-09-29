/**
 * @param {character[][]} grid
 * @return {boolean}
 */

var hasValidPath = function(grid) {

    const rows = grid.length;
    const cols = grid[0].length;    

    if (grid[0][0] === ')' || grid[rows - 1][cols - 1] === '(') {
        return false;
    }

    if ((rows + cols - 1) % 2 !== 0) {
        return false;
    }

    const memo = new Map();

    function searchPath(row, col, balance) {
        if (grid[row][col] === '(') {
            balance++;
        } else {
            balance--;
        }

        if (balance < 0) {
            return false;
        }

        if (row === rows - 1 && col === cols - 1) {
            return balance === 0;
        }

        const state = `${row},${col},${balance}`;

        if (memo.has(state)) {
            return memo.get(state);
        }

        let validPath = false;

        if (row + 1 < rows) {
            validPath = searchPath(row + 1, col, balance);
        }

        if (!validPath && col + 1 < cols) {
            validPath = searchPath(row, col + 1, balance);
        }

        memo.set(state, validPath);
        return validPath;
    }
};
