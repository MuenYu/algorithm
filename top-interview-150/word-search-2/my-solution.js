// https://leetcode.com/problems/word-search-ii/

class Trie {
    constructor() {
        this.root = {};
    }

    add(word) {
        let node = this.root;
        for (const s of word) {
            if (!node[s])
                node[s] = {};
            node = node[s];
        }
    }

    search(word) {
        let node = this.root;
        for (const s of word) {
            if (!node[s])
                return false;
            node = node[s];
        }
        return true;
    }
}


/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const m = board.length;
    const n = board[0].length;
    const dict = new Trie();
    const result = new Set();
    const wordSet = new Set(words);
    let maxLength = 0;
    for (const w of words) {
        if (w.length > maxLength) maxLength = w.length;
        dict.add(w);
    }
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (dict.search(board[i][j])) {
                const visited = initVisited();
                dfs('', i, j, 0);
                function dfs(prefix, i, j, length) {
                    if (length > maxLength) return;
                    // not on the board
                    if (i < 0 || i >= m || j < 0 || j >= n) return;
                    if (visited[i][j]) return;
                    visited[i][j] = true;
                    const str = prefix + board[i][j];
                    if (dict.search(str)) {
                        if (wordSet.has(str)) {
                            result.add(str);
                        }
                        dfs(str, i - 1, j, length + 1);
                        dfs(str, i + 1, j, length + 1);
                        dfs(str, i, j - 1, length + 1);
                        dfs(str, i, j + 1, length + 1);
                    }
                }
            }
        }
    }
    return Array.from(result);

    function initVisited() {
        const obj = {};
        for (let i = 0; i < m; ++i) {
            obj[i] = {};
        }
        return obj;
    }
};

const board = [["a","b","c","e"],["x","x","c","d"],["x","x","b","a"]];
const words = ["abc","abcd"];
console.log(findWords(board, words));
