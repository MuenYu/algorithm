// https://leetcode.com/problems/happy-number

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const set = new Set();
    while (n!==1) {
        n = digitsCheck(n);
        if (set.has(n)) return false;
        else set.add(n);
    }
    return true;
    
    function digitsCheck(n) {
        let count = 0;
        while (n / 10 > 0) {
            count += Math.pow(n%10,2);
            n = Math.floor(n/10);
        }
        count += Math.pow(n%10,2);
        return count;
    }
};


console.log(isHappy(2));