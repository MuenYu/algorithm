题目链接：[leetcode - 14](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

教程链接：[小浩算法](https://www.geekxh.com/1.0.%E6%95%B0%E7%BB%84%E7%B3%BB%E5%88%97/003.html)

# 我的解题思路
1. 首先简化数组，去除趋势相同的元素（例如 1 2 3 5 4 中 从1到5 都是增加，就去除中间的2和3，保留 1 5 4）
2. 如果后面的数大于前面的数，就卖出，利润为 后面的数减去前面数的差值
3. 将差值累加即为最终结果

多次提交，最终 Accept，但用时较长
