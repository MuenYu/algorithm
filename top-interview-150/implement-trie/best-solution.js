// https://leetcode.com/problems/implement-trie-prefix-tree

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;
    for (let letter of word) {
        if (node[letter] === undefined) node[letter] = {};
        node = node[letter];
    }
    node.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.root;
    for (let letter of word) {
        if (!node[letter]) {
            return false;
        } else {
            node = node[letter];
        }
    }
    return node && node.isEnd === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.root;
    for (let letter of prefix) {
        if (!node[letter]) {
            return false;
        } else {
            node = node[letter];
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie()
obj.insert("hotdog")
var param_3 = obj.startsWith("dog")
console.log(param_3);