// https://leetcode.com/problems/surrounded-regions
// wrong

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const m = board.length;
    const n = board[0].length;
    for (let i = 1; i < m - 1; ++i) {
        for (let j = 1; j < n - 1; ++j) {
            if (board[i][j] === 'O') {
                flip(i, j);
            }
        }
    }
    function flip(i, j) {
        const direction = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        let flag = true;
        for (const d of direction) {
            let x = i + d[0];
            let y = j + d[1];
            while (x > -1 && x < m && y > -1 && y < n) {
                if (board[x][y] === 'X') break;
                x += d[0];
                y += d[1];
            }
            if (x === -1 || x === m || y === -1 || y === n) {
                flag = false;
                break;
            }
        }
        if (flag) board[i][j] = 'X';
    }
};

const board = [["O","X","X","O","X"],["X","O","O","X","O"],["X","O","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]];
for (const r of board) {
    console.log(r);
}
console.log('----------');
solve(board);
for (const r of board) {
    console.log(r);
}