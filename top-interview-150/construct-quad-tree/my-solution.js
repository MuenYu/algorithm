/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
};

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
    const n = grid.length-1;
    function dfs(a, b, c, d) {
        let isLeaf = true;
        outer: for (let i = a; i <= b; ++i) {
            for (let j = c; j <= d; ++j) {
                if (grid[i][j] !== grid[a][c]) {
                    isLeaf = false;
                    break outer;
                }
            }
        }
        if (isLeaf) {
            return new Node(grid[a][c], true, null, null, null, null);
        } else {
            const midRow = Math.floor((a + b) / 2);
            const midCol = Math.floor((c + d) / 2);
            return new Node(grid[a][c], false,
                dfs(a, midRow, c, midCol),
                dfs(a, midRow, midCol + 1, d),
                dfs(midRow + 1, b, c, midCol),
                dfs(midRow + 1, b, midCol + 1, d),
            );
        }
    }
    return dfs(0, n, 0, n);
};
