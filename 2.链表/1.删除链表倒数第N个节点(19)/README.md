题目链接：[leetcode - 19](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list)

教程链接：[小浩算法](https://www.geekxh.com/1.1.%E9%93%BE%E8%A1%A8%E7%B3%BB%E5%88%97/101.html)

# 我的解题思路
1. 在链表最前端添加哨兵节点
2. 通过循环算出链表长度 size
3. 根据公式 i = size-n-1，算出要删除的前一位节点i
4. 如果i是整个链表的第一位（除哨兵节点），则返回链表第二位，否则返回head