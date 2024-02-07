// https://leetcode.com/problems/merge-sorted-array
// insert to the tail of nums1

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let index1 = 0, index2 = 0;
    const originalLength =nums1.length;
    while (m > 0 || n > 0) {
        if (m > 0 && n > 0) {
            if (nums1[index1] > nums2[index2]) {
                nums1.push(nums2[index2]);
                ++index2;
                --n;
            } else {
                nums1.push(nums1[index1]);
                ++index1;
                --m;
            }
        } else if (n > 0) {
            nums1.push(nums2[index2]);
            ++index2;
            --n;
        } else {
            nums1.push(nums1[index1]);
            ++index1;
            --m;
        }
    }
    nums1.splice(0,originalLength);
};

// let nums1 = [1,2,3,0,0,0], nums2 = [2,5,6], m = 3, n = 3;
let nums1 = [1], nums2 = [0], m = 1, n = 0;
merge(nums1, m, nums2, n);
console.log(nums1);
