// https://leetcode.com/problems/game-of-life

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const changes = [];
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j) {
            const newState = statusCheck(board,i,j);
            if (newState !== board[i][j]) {
                changes.push([i,j,newState]);
            }
        }
    }
    for (entry of changes) {
        board[entry[0]][entry[1]] = entry[2];
    }
    return board;
};

const direction = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1],
];

function statusCheck(board, row, col) {
    const m = board.length;
    const n = board[0].length;
    let liveCount = 0;
    const val = board[row][col];
    for (let i = 0; i < direction.length; ++i) {
        const tmpRow = row + direction[i][0];
        const tmpCol = col + direction[i][1];
        if (tmpRow > -1 && tmpRow < m && tmpCol > -1 && tmpCol < n) {
            if (board[tmpRow][tmpCol] === 1) {
                ++liveCount;
            }
        }
    }
    if (val == 1) {
        if (liveCount < 2 || liveCount > 3) return 0;
        return 1;
    } else if (liveCount == 3) {
        return 1;
    }
    return 0;
}

const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
// console.log(statusCheck(board, 0,2));
console.log(gameOfLife(board));