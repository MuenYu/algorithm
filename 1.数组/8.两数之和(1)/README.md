题目链接：[leetcode - 66](https://leetcode-cn.com/problems/two-sum)

教程链接：[小浩算法](https://www.geekxh.com/1.0.%E6%95%B0%E7%BB%84%E7%B3%BB%E5%88%97/007.html)

# 我的解题思路
1. 使用双循环，暴力计算与target相等的和
2. 如果相等，直接返回结果
3. 如果不相等继续循环
4. 如果循环结束仍没有结果 返回 nil

这种方式没有什么技术含量，并且时间复杂度过高 O(n^2)