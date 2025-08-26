/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = num + ""; 
    let calc = function() {
        let len = str.length;res = 0;
        for(let i = 0; i < len; i++){
            res += parseInt(str[i]);
        };
        if (res < 10){
            return res
        }else {
            str = res + ""
            return calc()
        };
    };
    return calc()
};