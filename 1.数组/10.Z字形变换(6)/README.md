题目链接：[leetcode - 6](https://leetcode-cn.com/problems/zigzag-conversion/)

教程链接：[小浩算法](https://www.geekxh.com/1.0.%E6%95%B0%E7%BB%84%E7%B3%BB%E5%88%97/009.html)

# 我的解题思路
1. 如果 numRow=1 相当于直接输出，所以直接返回源字符串
2. 创建一个二维切片用于保存数据
3. 字符串首先向下输出，当二维数组行号=numRow-1说明该换方向了，方向改为向上
4. 当二维数组行号=0说明该换方向了，方向改为向下
5. 输出完成后，将每一行的字符串拼接起来就是结果