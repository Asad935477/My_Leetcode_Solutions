/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const kIsThief = 1;
    const kUnvisited = -1;
    const rcTot = thiefGrid.length;
    const kOffsets = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    if (thiefGrid[0][0] === kIsThief || thiefGrid[rcTot - 1][rcTot - 1] === kIsThief) {
        return 0;
    }
};