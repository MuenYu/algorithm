// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;
    for (n of nums) {
        // if the item is different than the previous 2 items, it should be kept
        if (i<2 || n>nums[i-2]) {
            nums[i] = n;
            ++i;
        }
    }
    console.log(nums);
};

let arr = [0,0,1,1,1,1,2,3,3];
removeDuplicates(arr);