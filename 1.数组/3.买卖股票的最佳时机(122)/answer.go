package main

import "fmt"

func main() {
	fmt.Println(maxProfitAnswer([]int{3, 2, 6, 5, 0, 3}))
}

func maxProfitAnswer(prices []int) int {
	if len(prices) < 2 {
		return 0
	}
	//使用动态规划
	//DP Table：用于记录动态规划的路径表
	dp := make([][2]int, len(prices)) //DP Table [当前的位置 prices下标][当前的操作 是否买入]int
	// 设置起点
	dp[0][0] = 0          //第一个时间点不买入
	dp[0][1] = -prices[0] //第一个时间点买入
	for i := 1; i < len(prices); i++ {
		dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i]) // 对比卖出和不操作的收益，选择较大者
		dp[i][1] = max(dp[i-1][0]-prices[i], dp[i-1][1]) // 对比买入和不操作的收益，选择较大者
	}
	return dp[len(prices)-1][0] // 最后一步只能是卖出或是不操作，所以返回 [0]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
