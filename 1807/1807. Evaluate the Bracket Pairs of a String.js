/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let map = new Map();

    for(let list of knowledge) {
        map.set(list[0], list[1]);
    }

    let key = "";
    let res = "";
    let flag = false;

    for(let ch of s) {
        if(ch === '(') {
            flag = true;
        }
        else if(ch === ')') {
            if(map.has(key)) {
                res += map.get(key);
            }
            else {
                res += "?";
            }

            flag = false;
            key = "";
        }
        else if(flag) {
            key += ch;
        }
        else {
            res += ch;
        }
    }

    return res;
};/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let map = new Map();

    for(let list of knowledge) {
        map.set(list[0], list[1]);
    }

    let key = "";
    let res = "";
    let flag = false;

    for(let ch of s) {
        if(ch === '(') {
            flag = true;
        }
        else if(ch === ')') {
            if(map.has(key)) {
                res += map.get(key);
            }
            else {
                res += "?";
            }

            flag = false;
            key = "";
        }
        else if(flag) {
            key += ch;
        }
        else {
            res += ch;
        }
    }

    return res;
};