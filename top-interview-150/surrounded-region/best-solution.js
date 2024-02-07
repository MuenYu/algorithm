// https://leetcode.com/problems/surrounded-regions
// wrong

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const m = board.length;
    const n = board[0].length;
    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') return;
        board[i][j] = '#';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    for (let i = 0; i < n; ++i) {
        if (board[0][i] === 'O') dfs(0, i);
        if (board[m - 1][i] === 'O') dfs(m - 1, i);
    }
    for (let j = 0; j < m; ++j) {
        if (board[j][0] === 'O') dfs(j, 0);
        if (board[j][n - 1] === 'O') dfs(j, n - 1);
    }
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (board[i][j]==='O') board[i][j] = 'X';
            else if (board[i][j]==='#') board[i][j] = 'O';
        }
    }
}

const board = [["O", "X", "X", "O", "X"], ["X", "O", "O", "X", "O"], ["X", "O", "X", "O", "X"], ["O", "X", "O", "O", "O"], ["X", "X", "O", "X", "O"]];
for (const r of board) {
    console.log(r);
}
console.log('----------');
solve(board);
for (const r of board) {
    console.log(r);
}