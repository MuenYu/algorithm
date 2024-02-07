// https://leetcode.com/problems/word-ladder

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const map = new Map();
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    wordSet.add(beginWord);

    // build graph
    for (const word of wordSet) {
        if (!map.has(word)) {
            map.set(word, new Set());
        }
        for (const word2 of wordSet) {
            if (diffEq1(word, word2)) {
                map.get(word).add(word2);
            }
        }
    }

    let layer = new Set([beginWord]), count = 1;
    const visited = new Set();
    while (layer.size > 0) {
        const tmp = new Set();
        for (const word of layer) {
            visited.add(word);
        }
        for (const word of layer) {
            for (const neighbor of map.get(word)) {
                if (neighbor === endWord) return count+1;
                if (!visited.has(neighbor)) {
                    tmp.add(neighbor);
                }
            }
        }
        layer = tmp;
        ++count;
    }

    return 0;
    // supportive func
    function diffEq1(str1, str2) {
        let count = 0;
        for (let i = 0; i < str1.length; ++i) {
            if (str1[i] !== str2[i]) ++count;
            if (count > 1) return false;
        }
        return count === 1;
    }
};

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength(beginWord, endWord, wordList));