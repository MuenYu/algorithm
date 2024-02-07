// https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let reader = nums[0]==nums[1]? 2:1, writer = reader;
    let flag = false;
    while (reader < nums.length){
        // if new item        
        if (nums[reader-1]!==nums[reader]){
            nums[writer] = nums[reader];
            ++writer;
            flag = true;
        // the item after new item can be anything
        } else if (flag) {
            nums[writer] = nums[reader];
            ++writer;
            flag = false;
        }
        ++reader;
    }
    nums.splice(writer);
};