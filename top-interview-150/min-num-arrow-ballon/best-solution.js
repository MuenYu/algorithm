// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0]);
    let tmp = points[0],count = 1;
    for (let i = 1; i < points.length; ++i) {
        if (tmp[1] < points[i][0]) {
            tmp = points[i];
            ++count;
        } else {
            tmp[1] = Math.min(tmp[1], points[i][1]);
        }
    }
    return count;
};

const points = [[10, 16], [2, 8], [1, 6], [7, 12]];
console.log(findMinArrowShots(points));