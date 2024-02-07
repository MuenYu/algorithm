// https://leetcode.com/problems/word-search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    if (m === 1 && n === 1 && word.length === 1) return word === board[0][0];
    const status = [];
    let result = false;

    for (let i = 0; i < m; ++i) {
        status.push(new Array(n).fill(true));
    }

    const directionX = [-1, 0, 1, 0];
    const directionY = [0, 1, 0, -1];

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            dfs(i, j, 0);
            if (result) return true;
        }
    }

    function dfs(i, j, len) {
        if (len === word.length) {
            result = true;
            return;
        }
        if (board[i][j] !== word[len]) {
            return;
        }
        if (status[i][j]) {
            status[i][j] = false;
            for (let k = 0; k < directionX.length; ++k) {
                const row = i + directionX[k];
                const col = j + directionY[k];
                if (row > -1 && row < m && col > -1 && col < n) {
                    dfs(row, col, len + 1);
                }
            }
            status[i][j] = true;
        }
    }
    return false;
};

// const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
// const word = "ABCCED";
const board = [['a']];
const word = 'a';
console.log(exist(board, word));