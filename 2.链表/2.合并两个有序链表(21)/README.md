题目链接：[leetcode - 21](https://leetcode-cn.com/problems/merge-two-sorted-lists)

教程链接：[小浩算法](https://www.geekxh.com/1.1.%E9%93%BE%E8%A1%A8%E7%B3%BB%E5%88%97/102.html)

# 我的解题思路
1. 判断两个链表是否都不为空，如果有一个为空就返回其中的另一个
2. 使用哨兵节点作为result的头节点，它的next是 l1和l2头节点里更小的那一个
3. 通过循环，将l1，l2中Val更小的接到result后
4. 当有一个列表遍历完，就将另一个列表剩余的部分接到result后面
5. 返回哨兵.next
