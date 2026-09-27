/**
 * @param {string} s
 * @return {string}
 */

var reverseParentheses = function(s) {
    let st = [];
    let res = [];
    
    
    for(let i = 0; i < s.length; i++) {
        let ch = s[i];

        if(ch === '(') {
            st.push(res.length);
        }
        else if(ch === ')') {
            let start = st.pop();
            let end = res.length - 1;
            reverse(res, start, end);
        }
        else {
            res.push(ch);
        }
        
};
    return res.join('');

};