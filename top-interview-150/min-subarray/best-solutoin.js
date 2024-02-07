// https://leetcode.com/problems/minimum-size-subarray-sum

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0, n = nums.length, ans = n + 1, sum = 0;
    for (let right = 0; right < n; ++right) {
        sum += nums[right];
        while (left < right && sum >= target) {
            ans = Math.min(ans, right - left + 1);
            sum -= nums[left];
            ++left;
        }
    }
    return ans == n + 1 ? 0 : ans;
};

const target = 4;
const nums = [1,4,4]
console.log(minSubArrayLen(target,nums));