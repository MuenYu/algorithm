// https://leetcode.com/problems/merge-sorted-array
// brute insert

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let index1 = 0, index2 = 0;
    while (m > 0 || n > 0) {
        if (m > 0 && n > 0) {
            if (nums1[index1] > nums2[index2]) {
                nums1.splice(index1, 0, nums2[index2]);
                ++index1;
                ++index2;
                --n;
            } else {
                ++index1;
                --m;
            }
        } else if (n > 0) {
            nums1.splice(index1, 0, nums2[index2]);
            ++index1;
            ++index2;
            --n;
        } else {
            ++index1;
            --m;
        }
    }
    nums1.splice(index1, Infinity);
};

let nums1 = [1], nums2 = [], m = 1, n = 0;
merge(nums1, m, nums2, n);
console.log(nums1);
