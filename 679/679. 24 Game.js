/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function(cards) {
    const EPSILON = 1e-6;
    const dfs = (nums) => {
        if (nums.length === 1) {
            return Math.abs(nums[0] - 24) < EPSILON;
        };
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;
                const next = [];
                for (let k = 0; k < nums.length; k++) {
                    if (k !== i && k !== j) next.push(nums[k]);
                };
                const a = nums[i], b = nums[j];
                const candidates = [ a+b, a-b, b-a, a*b ];
                if (Math.abs(b) > EPSILON) candidates.push(a / b);
                if (Math.abs(a) > EPSILON) candidates.push(b / a);
                for (const val of candidates) {
                    next.push(val);
                    if (dfs(next)) return true;
                    next.pop();
                };
            };
        };
        return false;
    };
    return dfs(cards.map(c => c * 1.0)); 
};