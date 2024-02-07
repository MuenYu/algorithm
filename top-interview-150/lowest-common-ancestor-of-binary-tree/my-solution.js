// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// timeout

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const nodes = [];
    const queue = [root];
    let pidx = 0, qidx = 0;
    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            nodes.push(node);
            if (node.val === p.val) pidx = nodes.length;
            if (node.val === q.val) qidx = nodes.length;
            queue.push(node.left);
            queue.push(node.right);
        } else {
            nodes.push(null);
        }
    }
    const ancestorP = ancestorArr(pidx);
    const ancestorQ = ancestorArr(qidx);
    let i = 0, j = 0;
    while (i < ancestorP.length && j < ancestorQ.length) {
        if (ancestorP[i] === ancestorQ[j]) return nodes[ancestorP[i]-1];
        else if (ancestorP[i]>ancestorQ[j]) ++i;
        else ++j;
    }

    function ancestorArr(idx) {
        const result = [];
        while (idx > 0) {
            result.push(idx);
            idx = Math.floor(idx / 2);
        }
        return result;
    }
};