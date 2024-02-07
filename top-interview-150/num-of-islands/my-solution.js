// https://leetcode.com/problems/number-of-islands
// wrong

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    const map = new Array(m);
    for (let i = 0; i < m; ++i) {
        map[i] = new Array(n).fill(true);
    }
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (map[i][j] && grid[i][j] === '1') {
                dfs(i, j);
                ++count;
            }
        }
    }
    function dfs(i, j) {
        let layer = 1, goDeeper = false;
        do {
            let x = i;
            let y = j + layer;
            goDeeper = false;
            while (y >= j) {
                if (x >= m || y >= n) {
                    ++x;
                    --y;
                    continue;
                }
                if (grid[x][y] === '1') goDeeper = true;
                map[x][y] = false;
                ++x;
                --y;
            }
            ++layer;
        } while (goDeeper);
    }
    return count;
};

const grid = [["1","1","1","1"],["1","1","0","0"],["0","0","1","0"],["0","0","0","1"]];
console.log(numIslands(grid));