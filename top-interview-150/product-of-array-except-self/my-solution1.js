// https://leetcode.com/problems/product-of-array-except-self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let product = 1;
    let zeroCount = 0;
    let zeroIndex = -1;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] == 0) {
            ++zeroCount;
            if (zeroCount == 2) {
                return nums.fill(0);
            }
            zeroIndex = i;
            continue;
        }
        product *= nums[i];
    }
    if (zeroCount == 1) {
        nums.fill(0);
        nums[zeroIndex] = product;
        return nums;
    }
    for (let i = 0; i < nums.length; ++i) {
        nums[i] = product / nums[i];
    }
    return nums;
};