// https://leetcode.com/problems/valid-sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const row = new Array(board.length);
    const col = new Array(board.length);
    const block = new Array(board.length);
    for (let i = 0;i<board.length;++i) {
        row[i] = new Map();
        col[i] = new Map();
        block[i] = new Map();
    }
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board.length; ++j) {
            const c = board[i][j];
            if (c !== '.') {
                const blockNum = Math.floor(i / 3) + Math.floor(j / 3) * 3;

                const uniRow = add2Map(row[i], c);
                const uniCol = add2Map(col[j], c);
                const uniBlock = add2Map(block[blockNum], c);
                if (uniRow || uniCol || uniBlock) {
                    console.log(row);                    
                    console.log(col);                    
                    console.log(block);
                    return false;
                }
            }
        }
    }
    return true;
};

function add2Map(map, val) {
    if (map.has(val)) {
        return true;
    } else {
        map.set(val, 1);
        return false;
    }
}

const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(isValidSudoku(board));