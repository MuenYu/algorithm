// https://leetcode.com/problems/symmetric-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let nodes = [root];
    while (nodes.length > 0) {
        let tmp = [];
        for (let i = 0; i < nodes.length; ++i) {
            if (nodes[i]) {
                tmp.push(nodes[i].left);
                tmp.push(nodes[i].right);
            }
        }
        if (quit(tmp)) return false;
        nodes = tmp;
    }

    function quit(nodes) {
        const length = nodes.length;
        if (length % 2 !== 0) return true;
        for (let i = 0, j = length - 1; i < j; ++i, --j) {
            if (nodes[i] && nodes[j]) {
                if (nodes[i].val !== nodes[j].val) return true;
            }
            else if (nodes[i] !== nodes[j]) return true
        }
        return false;
    }
    return true;
};



// const l3n1 = new TreeNode(3);
// const l3n2 = new TreeNode(3);
// const l2n1 = new TreeNode(2,null,l3n1);
// const l2n2 = new TreeNode(2,null,l3n2);
// const root = new TreeNode(1, l2n1,l2n2);

const l3n1 = new TreeNode(3);
const l3n2 = new TreeNode(4);
const l3n3 = new TreeNode(4);
const l3n4 = new TreeNode(3);
const l2n1 = new TreeNode(2, l3n1, l3n2);
const l2n2 = new TreeNode(2, l3n3, l3n4);
const root = new TreeNode(1, l2n1, l2n2);
console.log(isSymmetric(root));