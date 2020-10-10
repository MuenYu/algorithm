题目链接：[leetcode - 122](https://leetcode-cn.com/problems/rotate-array/)

教程链接：[小浩算法](https://www.geekxh.com/1.0.%E6%95%B0%E7%BB%84%E7%B3%BB%E5%88%97/004.html)

# 我的解题思路
1. 简化移动步数：当移动步数与自身长度相同相当于没有移动
2. 开辟数组，存储移动后会越界的部分
3. 将不越界的部分往右移动
4. 将越界的部分补充回原数组的头部
