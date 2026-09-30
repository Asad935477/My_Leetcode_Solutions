/**
 * @param {string} seq
 * @return {number[]}
 */

var maxDepthAfterSplit = function(seq) {
    const answer = [];
    let currentGroup = 1;

    for (const bracket of seq) {
         if (bracket === '(') {
       let currentGroup = 1;
         answer.push(1 - currentGroup);
        }

    }
}