// https://leetcode.com/problems/median-of-two-sorted-arrays
// wrong

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    function getMedian(nums) {
        if (nums.length === 0) return undefined;
        if (nums.length === 1) return nums[0];
        const mid = nums.length >> 1;
        if (nums.length % 2 === 0) return (nums[mid] + nums[mid - 1]) / 2;
        else return nums[mid];
    }
    const med1 = getMedian(nums1);
    const med2 = getMedian(nums2);
    if (med1 && med2) return (med1 + med2) / 2;
    else return med1 ? med1 : med2;
};

const nums1 = [1, 3];
const nums2 = [2, 7];

console.log(findMedianSortedArrays(nums1, nums2));