// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length === 1) return 1;
    points.sort((a, b) => a[0] - b[0]);
    const result = [points[0]];
    for (let i = 1; i < points.length; ++i) {
        const last = result[result.length - 1];
        if (last[1] < points[i][0]) {
            result.push(points[i]);
        } else {
            last[0] = Math.max(last[0], points[i][0]);
            last[1] = Math.min(last[1], points[i][1]);
        }
    }
    return result.length;
};

const points = [[10, 16], [2, 8], [1, 6], [7, 12]];
console.log(findMinArrowShots(points));