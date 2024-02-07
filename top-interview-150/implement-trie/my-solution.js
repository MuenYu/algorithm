// https://leetcode.com/problems/implement-trie-prefix-tree
// wrong

var Trie = function () {
    this.layers = [];
    this.set = new Set();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    this.set.add(word);
    for (let i = 0; i < word.length; ++i) {
        if (i >= this.layers.length)
            this.layers.push(new Map());
        const layerMap = this.layers[i];
        if (!layerMap.has(word[i]))
            layerMap.set(word[i], new Set())
        if (word[i + 1] !== undefined)
            layerMap.get(word[i]).add(word[i + 1])
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    return this.set.has(word);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    if (prefix.length > this.layers.length) return false;
    for (let i = 0; i < prefix.length; ++i) {
        const layerMap = this.layers[i];
        if (!layerMap.has(prefix[i])) return false;
        if (prefix[i + 1] !== undefined) {
            if (!layerMap.get(prefix[i]).has(prefix[i+1]))
                return false;
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