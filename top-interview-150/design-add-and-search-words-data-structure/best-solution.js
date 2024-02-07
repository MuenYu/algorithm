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
    function helper(i, node) {
        if (i == word.length) {
            return node.isEnd === true;
        }
        if (word[i] == '.') {
            for (let k in node) {
                if (k == "isEnd") continue;
                if (helper(i + 1, node[k]))
                    return true;
            }
            return false;
        }
        if (!(word[i] in node)) return false;
        return helper(i + 1, node[word[i]]);
    }
    return helper(0, this.root);
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