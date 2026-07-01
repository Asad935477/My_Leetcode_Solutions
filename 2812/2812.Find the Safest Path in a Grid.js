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

    const safenessGrid = Array.from({ length: rcTot }, () => Array(rcTot).fill(kUnvisited));
    const bfsQ = [];
    let head = 0; 

        for (let r = 0; r < rcTot; r++) {
        for (let c = 0; c < rcTot; c++) {
            if (thiefGrid[r][c] === kIsThief) {
                safenessGrid[r][c] = 0;
                bfsQ.push([r, c]);
            }
        }
    }

        while (head < bfsQ.length) {
        const [currR, currC] = bfsQ[head++];
        for (const [dr, dc] of kOffsets) {
            const nextR = currR + dr;
            const nextC = currC + dc;
            if (nextR >= 0 && nextR < rcTot && nextC >= 0 && nextC < rcTot && safenessGrid[nextR][nextC] === kUnvisited) {
                safenessGrid[nextR][nextC] = safenessGrid[currR][currC] + 1;
                bfsQ.push([nextR, nextC]);
            }
        }
    }

    const maxPq = new MaxPriorityQueue(x => x.safeness);
    maxPq.enqueue({ safeness: safenessGrid[0][0], r: 0, c: 0 });

    const isPosVisited = Array.from({ length: rcTot }, () => Array(rcTot).fill(false));
    isPosVisited[0][0] = true;

};