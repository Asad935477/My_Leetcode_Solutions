/**
 * @param {string} s
 * @return {number}
 */

var minAddToMakeValid = function(s) {
    let o = 0;
    let e = 0;

    for (let ch of s) {
        if (ch === '(')
            o++;
        else {
            if (o > 0)
                o--;
            else
                e++;
        }
    }

    return o + e;
};