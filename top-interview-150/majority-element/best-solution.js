// https://leetcode.com/problems/majority-element
// algorithm: moore voting

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 0, candidate = 0;
    for (n of nums) {
        if (count == 0) {
            candidate = n;
        }
        // the majority num occupy over half of the array, its count must larger than 0.
        count = n == candidate? count+1:count-1;
    }
    return candidate;
};

// arr = [6,5,5];
arr = [1];
console.log(majorityElement(arr));
