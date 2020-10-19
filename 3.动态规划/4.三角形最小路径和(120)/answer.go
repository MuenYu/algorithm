package main

import "fmt"

func main() {
	triangle := [][]int{{2}, {3, 4}, {6, 5, 9}, {4, 4, 8, 0}}
	fmt.Println(minimumTotalAnswer(triangle))
}

func minimumTotalAnswer(triangle [][]int) int {
	if len(triangle) < 1 {
		return 0
	}
	if len(triangle) == 1 {
		return triangle[0][0]
	}
	dp := make([][]int, len(triangle)) //dp[i][j] : 表示包含第i行j列元素的最小路径和
	for i, arr := range triangle {     //逐行初始化
		dp[i] = make([]int, len(arr))
	}

	//最初设定
	dp[0][0] = triangle[0][0]                  //最顶上的数字
	dp[1][1] = triangle[1][1] + triangle[0][0] //第二行的数字只能来自最上面的数字
	dp[1][0] = triangle[1][0] + triangle[0][0] //第二行的数字只能来自最上面的数字

	for i := 2; i < len(triangle); i++ {
		for j := 0; j < len(triangle[i]); j++ {
			if j == 0 { //最左边的特殊情况
				dp[i][j] = dp[i-1][j] + triangle[i][j]
			} else if j == (len(triangle[i]) - 1) { //最右边的特殊情况
				dp[i][j] = dp[i-1][j-1] + triangle[i][j]
			} else {
				dp[i][j] = min(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]
			}
		}
	}
	result := dp[len(dp)-1][0]
	//对比最后一行得出最短路径
	for _, k := range dp[len(dp)-1] {
		result = min(result, k)
	}
	return result
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
