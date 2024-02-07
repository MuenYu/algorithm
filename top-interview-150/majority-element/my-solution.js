// https://leetcode.com/problems/majority-element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const length = nums.length;
    nums.sort((a,b)=>a-b);
    if (length % 2 == 0) {
        return nums[Math.ceil(length/2)];
    } else {
        return nums[Math.floor(length/2)];
    }
};

// arr = [6,5,5];
arr = [1];
console.log(majorityElement(arr));
