// https://leetcode.com/problems/remove-element/submissions/1115716739/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0, j = nums.length - 1;
    while (i < j) {
        if (nums[i] !== val) {
            ++i;
        }
        else if (nums[j] !== val) {
            const tmp = nums[j];
            nums[j] = nums[i];
            nums[i] = tmp;
            ++i;
            --j;
        } else {
            --j;
        }
    }
    if (nums[i]!==val){
        ++i;
    }
    nums.splice(i);
};