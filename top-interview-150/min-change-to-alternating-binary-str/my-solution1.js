// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    const arr1 = new Array(s.length).fill('0');
    const arr2 = new Array(s.length).fill('1');
    for (let i = 1;i<s.length;i+=2) {
        arr1[i] = '1';
        arr2[i] = '0';
    }
    let count1 = 0, count2 = 0;
    for (let i = 0;i<s.length;++i) {
        if (arr1[i]!==s[i]){
            ++count1;
        }
        if(arr2[i]!==s[i]) {
            ++count2;
        }
    }
    return count1>count2? count2:count1;
};

console.log(minOperations("0100"));