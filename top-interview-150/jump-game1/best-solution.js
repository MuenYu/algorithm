// https://leetcode.com/problems/jump-game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let reachable = 0;
    for (let i = 0; i < nums.length; ++i) {
        // if the place is not reachable, which means all places after it cannot be accessed either.
        if (i > reachable) {
            return false;
        }
        reachable = Math.max(reachable, i + nums[i]);
    }
    return true;
}