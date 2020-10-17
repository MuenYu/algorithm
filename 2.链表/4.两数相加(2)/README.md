题目链接：[leetcode - 2](https://leetcode-cn.com/problems/add-two-numbers)

教程链接：[小浩算法](https://www.geekxh.com/1.1.%E9%93%BE%E8%A1%A8%E7%B3%BB%E5%88%97/104.html)

# 我的解题思路
1. 新建哨兵节点作为结果链表的头节点
2. 当l1，l2 都不为空时循环，循环体内将l1、l2的Val、上一轮的进位相加得到结果位
3. 如果循环结束，进位不为0，则将它补充到结果链表上