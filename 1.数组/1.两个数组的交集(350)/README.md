题目链接：[leetcode - 350](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

教程链接：[小浩算法](https://www.geekxh.com/1.0.%E6%95%B0%E7%BB%84%E7%B3%BB%E5%88%97/001.html#_01%E3%80%81%E9%A2%98%E7%9B%AE%E5%88%86%E6%9E%90)

# 我的解题思路
1. 使用Map对数组进行压缩和去重，保存为 `[数字:出现次数]` 的模式 例如：`[1,2,2,1] -> [1:2,2:2]`
2. 对Map进行键值遍历，由于Map的key不会重复，进行双循环比较，同key就是相同的数字，同key下更小的value代表重复的次数

Accept 但用时较长，内存占用较大



