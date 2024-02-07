// https://leetcode.com/problems/design-add-and-search-words-data-structure

var WordDictionary = function () {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
        if (node[word[i]] === undefined)
            node[word[i]] = {};
        node = node[word[i]];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    const head = this.root;
    function helper(word, node) {
        node = node || head;
        const letter = word[0];
        if (letter === '.') {
            for (const key of Object.keys(node)) {
                if (word.length === 1) {
                    if (node[key].isEnd) return true;
                } else {
                    if (helper(word.substring(1), node[key])) return true;
                }
            }
            return false;
        } else if (node[letter]) {
            if (word.length === 1)
                return node[letter].isEnd !== undefined;
            else
                return helper(word.substring(1), node[letter]);
        } else {
            return false;
        }
    }
    return helper(word);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
let obj = new WordDictionary();
obj.addWord('at');
obj.addWord('and');
obj.addWord('an');
obj.addWord('add');
obj.addWord('bat');

console.log(obj.search('.at'));