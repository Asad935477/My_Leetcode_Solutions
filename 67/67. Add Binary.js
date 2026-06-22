/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];
    
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        
        if (i >= 0) {
            sum += a[i] - '0';
            i--;
        }
        
        if (j >= 0) {
            sum += b[j] - '0';
            j--;
        }
        
        result.push(sum % 2);
        carry = Math.floor(sum / 2);
    }
    
    return result.reverse().join("");
};