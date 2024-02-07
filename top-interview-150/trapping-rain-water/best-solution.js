/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0,r = height.length-1, lMax = -1, rMax = -1, ans = 0;
    while (l<r) {
        lMax = Math.max(lMax, height[l]);
        rMax = Math.max(rMax, height[r]);
        ans += lMax<rMax? lMax-height[l++]:rMax-height[r--];
    }
    return ans;
};