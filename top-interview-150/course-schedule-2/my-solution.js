// https://leetcode.com/problems/course-schedule-ii

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const graph = new Map();
    const leaves = [];
    const indegree = new Array(numCourses).fill(0);
    const order = [];

    for (const [c1, c2] of prerequisites) {
        if (graph.has(c2)) {
            graph.get(c2).push(c1);
        } else {
            graph.set(c2, [c1]);
        }
        ++indegree[c1];
    }

    for (let i = 0; i < indegree.length; ++i) {
        if (indegree[i] === 0) leaves.push(i);
    }

    while (leaves.length > 0) {
        const leaf = leaves.pop();
        if (graph.has(leaf)) {
            for (const neighbor of graph.get(leaf)) {
                --indegree[neighbor];
                if (indegree[neighbor] === 0) leaves.push(neighbor);
            }
        }
        order.push(leaf);
    }
    return order.length === numCourses ? order : [];
};

const numCourses = 4;
const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];
console.log(findOrder(numCourses, prerequisites));