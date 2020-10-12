题目链接：[leetcode - 15](https://leetcode-cn.com/problems/3sum/)

教程链接：[小浩算法](https://www.geekxh.com/1.0.%E6%95%B0%E7%BB%84%E7%B3%BB%E5%88%97/008.html)

# 我的解题思路
假设 a b c 是符合题意的三数 可推导出 c = -(a+b)
1. 两层循环用于遍历三数之和中的前两个数（即a b）
2. 在剩下的数中寻找 -(a+b) 
3. 将符合条件的结果 [a b c] 进行排序（假设排序结果仍为 [a b c]）
4. 将数组 [a b c] id化：将a b c作为字符串拼接起来
5. 将数组id（abc）和数组[a b c]作为key-value存入map[string][]int 中，用于去重
6. 遍历map，将结果存入result返回