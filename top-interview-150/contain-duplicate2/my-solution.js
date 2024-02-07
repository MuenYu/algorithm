// https://leetcode.com/problems/contains-duplicate-ii

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    if (nums.length === 1) return false;
    if (nums.length<=k+1) {
        const set = new Set(nums);
        return set.size !== nums.length;
    }
    const set = new Set([...nums.slice(0, k + 1)]);
    if (set.size != k + 1) return true;
    for (let i = k + 1; i < nums.length; ++i) {
        set.delete(nums[i - k - 1]);
        if (set.has(nums[i])) return true;
        else set.add(nums[i]);
    }
    return false;
};

