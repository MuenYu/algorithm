// https://leetcode.com/problems/container-with-most-water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0, j = height.length - 1, max = 0;
    while (i < j) {
        const iIsLower = height[i] < height[j];
        const lowerHeight = iIsLower ? height[i] : height[j];
        const water = lowerHeight * (j - i);
        max = max > water ? max : water;
        if (iIsLower) {
            ++i;
        }else {
            --j;
        }
    }
    return max;
};