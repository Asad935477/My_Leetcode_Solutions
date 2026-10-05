/**
 * @param {string} s
 * @return {number}
 */

var scoreOfParentheses= function(s) {
    let st = [];
    let res = 0;

    for(let ch of s) {
       if(ch === '(') {
            st.push(res);
            res = 0;
        }
         
    }


};