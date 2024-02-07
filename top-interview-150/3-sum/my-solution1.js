// https://leetcode.com/problems/3sum
// wrong

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort();
    console.log(nums);
    const result = [];
    for (let i = 0; i < nums.length - 2; ++i) {
        if (i>0 && nums[i]===nums[i-1]) {
            continue;
        }
        let j = i + 1, k = nums.length - 1;
        const target = 0 - nums[i];
        while (j < k) {
            const sum = nums[k] + nums[j];
            if (sum === target) {
                if (j !== i + 1 && nums[j] === nums[j - 1]) {
                    ++j;
                    continue;
                }
                if (k !== nums.length - 1 && nums[k] === nums[k - 1]) {
                    --k;
                    continue;
                }
                result.push([nums[i], nums[j], nums[k]]);
                ++j;
            } else if (sum > target) {
                --k;
            } else {
                ++j;
            }
        }
    }
    return result;
};

const arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));