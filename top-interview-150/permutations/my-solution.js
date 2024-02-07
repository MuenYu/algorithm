// https://leetcode.com/problems/permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const set = new Set();
    const result = [];
    const arr = [];
    dfs();
    function dfs() {
        if (arr.length === nums.length) {
            result.push(arr.slice());
            return;
        }
        for (const num of nums) {
            if (!set.has(num)) {
                set.add(num);
                arr.push(num);
                dfs();
                arr.pop();
                set.delete(num);
            }
        }
    }
    return result;
};

console.log(permute([1,2,3]));