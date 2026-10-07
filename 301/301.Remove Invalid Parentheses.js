/**
 * @param {string} s
 * @return {string[]}
 */

var removeInvalidParentheses = function(s) {
    const ans = [];
    remove(s, ans, 0, 0, ['(', ')']);
    return ans;
};

function remove(s, ans, i, j, p) {
    let count = 0;


}