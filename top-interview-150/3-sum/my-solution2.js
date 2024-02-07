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
    let i = 0, j = nums.length - 1;
    while (i < j) {
        const target = 0 - nums[i] - nums[j];
        for (let k = i + 1; k < j; ++k) {
            if (nums[k] === target) {
                if (k!==i+1 && nums[k] == nums[k-1]) {
                    continue;
                }
                result.push([nums[i],nums[k],nums[j]]);
            } else if (nums[k] > target) {
                break;
            }
        }
        ++i;
        --j;
    }
    return result;
};

const arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));