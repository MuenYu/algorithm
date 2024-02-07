// https://leetcode.com/problems/remove-element/submissions/1115716739/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let reader = 0, writer = 0;
    for (let i = 0;i<nums.length;++i) {
        if (nums[i] === val) {
            ++reader;
        } else {
            nums[writer++] = nums[reader++]; 
        }
    }
    
};