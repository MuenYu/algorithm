// https://leetcode.com/problems/trapping-rain-water
// wrong ans

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length < 3) return 0;
    const border = [];
    for (let i = 0; i < height.length; ++i) {
        if (height[i] > (height[i - 1] || 0) && height[i] > (height[i + 1] || 0)) {
            border.push(i);
        }
    }
    const dp = new Array(border.length).fill(0);
    for (let i = 1;i<border.length;++i) {
      // from head to tail
      const area1 = Math.min(height[border[0]],height[border[i]]) * (border[i]-border[0]-1) - midBlock(height, border[0], border[i]);
      // the previous max + current space
      const area2 = dp[i-1] + Math.min(height[border[i-1]],height[border[i]]) * (border[i]-border[i-1]-1) - midBlock(height,border[i-1],border[i]);
      dp[i] = Math.max(area1,area2);
    }
    return dp[dp.length-1];
};

function midBlock(arr,start, end) {
    let sum = 0;
    const min = Math.min(arr[start],arr[end]);
    for (let i = start +1;i<end;++i) {
        sum += Math.min(min,arr[i]);
    }
    return sum;
}