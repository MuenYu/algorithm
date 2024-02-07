// https://leetcode.com/problems/insert-interval

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length === 0) return [newInterval];
    const result = [];
    let i = 0;
    // find the place for the new interval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        ++i;
    }
    // insert/merge it into intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);
    // add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        ++i;
    }
    return result;
};

const interval = [[1, 3], [6, 9]];
const newInterval = [2, 5];
console.log(insert(interval, newInterval));