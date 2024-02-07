// https://leetcode.com/problems/word-search-ii/

class TrieNode {
    constructor() {
        this.children = {}; // 存储子节点
        this.word = null; // 如果当前节点是一个单词的结尾，则存储该单词
    }
}

const findWords = function(board, words) {
    const root = new TrieNode(); // 创建Trie树的根节点
    
    // 构建Trie树
    for (const word of words) {
        let node = root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(); // 如果当前节点的子节点中没有该字符，则创建新的节点
            }
            node = node.children[char]; // 移动到下一个节点
        }
        node.word = word; // 将当前节点标记为单词的结尾
    }
    
    const result = []; // 存储结果的数组
    
    // 深度优先搜索函数
    const dfs = (node, i, j) => {
        if (node.word) {
            result.push(node.word); // 如果当前节点是一个单词的结尾，则将该单词加入结果数组
            node.word = null; // 避免重复添加
        }
        
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            return; // 超出边界，返回
        }
        
        if (!node.children[board[i][j]]) {
            return; // 当前节点的子节点中没有该字符，返回
        }
        
        const char = board[i][j];
        board[i][j] = '#'; // 标记为已访问
        
        // 向四个方向进行深度优先搜索
        dfs(node.children[char], i + 1, j);
        dfs(node.children[char], i - 1, j);
        dfs(node.children[char], i, j + 1);
        dfs(node.children[char], i, j - 1);
        
        board[i][j] = char; // 恢复原始状态
    };
    
    // 遍历整个2D板
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(root, i, j); // 对每个位置进行深度优先搜索
        }
    }
    
    return result; // 返回结果数组
};