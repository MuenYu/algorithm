// https://leetcode.com/problems/course-schedule

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let count = 0;
    const leaves = [];
    const graph = new Map();
    const indegree = Array(numCourses).fill(0);

    for (const [e, v] of prerequisites) {
        // build graph map
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        // build indegree array
        ++indegree[e];
    }
    console.log(graph);
    // find all leaves
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) leaves.push(i);
    }
    console.log(leaves);
    while (leaves.length) {
        const v = leaves.pop();
        if (graph.has(v)) {
            for (const e of graph.get(v)) {
                --indegree[e];
                if (indegree[e] === 0) leaves.push(e);
            }
        }
        ++count;
    }
    return numCourses === count;
};

const numCourses = 3;
const prerequisites = [[1, 0]];
console.log(canFinish(numCourses, prerequisites));