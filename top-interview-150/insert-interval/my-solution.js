// https://leetcode.com/problems/insert-interval

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length===0) return [newInterval]; 
    intervals.push(newInterval);
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

const interval = [[1, 3], [6, 9]];
const newInterval = [2, 5];
console.log(insert(interval, newInterval));