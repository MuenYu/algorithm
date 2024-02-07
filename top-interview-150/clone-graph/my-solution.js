// https://leetcode.com/problems/clone-graph/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    const map = new Map();
    function dfs(node) {
        if (!node) return;
        if (map.has(node)) return;
        map.set(node, new Node(node.val, []));
        for (const n of node.neighbors) {
            dfs(n);
        }
    }
    dfs(node);
    for (const [k,v] of map) {
        for (const n of k.neighbors) {
            v.neighbors.push(map.get(n));
        }
    }
    return map.get(node);
};