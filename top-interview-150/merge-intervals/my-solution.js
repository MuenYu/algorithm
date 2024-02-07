// https://leetcode.com/problems/merge-intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; ++i) {
        const lastMax = result[result.length - 1][1];
        const curMin = intervals[i][0];
        const curMax = intervals[i][1];
        if (lastMax < curMin) {
            result.push(intervals[i]);
        } else if (lastMax < curMax) {
            result[result.length - 1][1] = curMax;
        }
    }
    return result;
};

const intervals = [[2, 6], [1, 3], [8, 10], [15, 18]];
console.log(merge(intervals));