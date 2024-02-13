// https://leetcode.com/problems/median-of-two-sorted-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    nums1 = nums1.concat(nums2);
    nums1.sort((a, b) => a - b);
    const mid = nums1.length >> 1;
    if (nums1.length % 2 === 0) return (nums1[mid] + nums1[mid - 1]) / 2;
    else return nums1[mid];
};

const nums1 = [1, 3];
const nums2 = [2, 7];

console.log(findMedianSortedArrays(nums1, nums2));