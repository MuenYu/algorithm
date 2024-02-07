// https://leetcode.com/problems/combination-sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];
    const arr = [];
    candidates = candidates.sort((a, b) => a - b);

    function dfs(target, idx) {
        if (target === 0) {
            result.push([...arr]);
            return;
        }
        for (let i = idx; candidates[i] <= target; ++i) {
            arr.push(candidates[i]);
            dfs(target - candidates[i], i);
            arr.pop();
        }
    }
    dfs(target, 0);
    return result;
};

const candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4];
const target = 15;
console.log(combinationSum(candidates, target));

// [[3, 12],[11, 4]]