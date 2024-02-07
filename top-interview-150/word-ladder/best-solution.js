// https://leetcode.com/problems/word-ladder

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0; // 结束单词不在词列表中，无法转换
    }

    let level = 1;
    const queue = [beginWord];

    while (queue.length > 0) {
        const next = [];
        for (const word of queue) {
            if (word === endWord) {
                return level; // 找到了结束单词，返回当前层级
            }
            for (let i = 0; i < word.length; i++) {
                for (let j = 97; j <= 122; j++) { // 26个小写字母
                    const newWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
                    if (wordSet.has(newWord)) {
                        next.push(newWord);
                        wordSet.delete(newWord); // 避免重复访问
                    }
                }
            }
        }
        level++;
        queue.length = 0; // 清空当前层级的单词
        queue.push(...next); // 将下一层级的单词加入队列
    }

    return 0; // 无法转换到结束单词
}

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength(beginWord, endWord, wordList));