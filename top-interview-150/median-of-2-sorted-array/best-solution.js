// https://leetcode.com/problems/median-of-two-sorted-arrays

var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    const x = nums1.length;
    const y = nums2.length;
    let low = 0;
    let high = x;
    
    while (low <= high) {
        let partitionX = (low + high) >> 1;
        let partitionY = ((x + y + 1) >> 1) - partitionX;
        
        let maxX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        let minX = (partitionX === x) ? Number.POSITIVE_INFINITY : nums1[partitionX];
        
        let maxY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        let minY = (partitionY === y) ? Number.POSITIVE_INFINITY : nums2[partitionY];
        
        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
};