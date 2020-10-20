/**
通过，思路与标答相同，写法一致，不放出标答
*/
package main

import "fmt"

func main() {
	grid := [][]int{{1, 3, 1}, {1, 5, 1}, {4, 2, 1}}
	fmt.Println(minPathSum(grid))
}

func minPathSum(grid [][]int) int {
	if len(grid) == 0 {
		return 0
	}
	if len(grid[0]) == 0 {
		return 0
	}
	dp := make([][]int, len(grid))

	for i := 0; i < len(dp); i++ {
		dp[i] = make([]int, len(grid[i]))
		for j := 0; j < len(dp[i]); j++ {
			if i == 0 && j == 0 { //如果在第一行 第一列
				dp[i][j] = grid[0][0] //起点设置
			} else if i == 0 {
				dp[i][j] = dp[i][j-1] + grid[i][j] //在第一行
			} else if j == 0 {
				dp[i][j] = dp[i-1][j] + grid[i][j] //在第一列
			} else {
				dp[i][j] = min(dp[i][j-1], dp[i-1][j]) + grid[i][j]
			}
		}
	}
	return dp[len(dp)-1][len(dp[0])-1]
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
