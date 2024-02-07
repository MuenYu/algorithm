// https://leetcode.com/problems/remove-duplicates-from-sorted-array
// this is the same as the best solution, congrats

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let reader = 1, writer = 1;
    while (reader < nums.length){
        if (nums[reader-1]!==nums[reader]){
            nums[writer] = nums[reader];
            ++writer;
        }
        ++reader;
    }
    nums.splice(writer);
};