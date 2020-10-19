/*
	尝试多次，自解失败
*/
package main

import (
	"fmt"
	"math"
)

func main() {
	triangle := [][]int{{2}, {3, 4}, {6, 5, 9}, {4, 4, 8, 0}}
	fmt.Println(minimumTotal(triangle))
}

func minimumTotal(triangle [][]int) int {
	if len(triangle) == 0 {
		return 0
	}
	dp := make([][]int, len(triangle)) //用于表示路径情况
	dp[0] = []int{triangle[0][0]}      //第一行
	for i := 1; i < len(triangle); i++ {
		dp[i] = make([]int, int(math.Pow(float64(2), float64(i))))
		for j, k := 0, 0; j < len(dp[i]); j += 2 {
			dp[i][j] = dp[i-1][j/2] + triangle[i][k]
			dp[i][j+1] = dp[i-1][j/2] + triangle[i][k+1]
			if k < len(triangle[i])-2 {
				k++
			}

		}
		fmt.Println(dp[i])
	}
	return minInArr(dp[len(dp)-1])
}

func minInArr(nums []int) int {
	min := nums[0]
	for i := 1; i < len(nums); i++ {
		if min > nums[i] {
			min = nums[i]
		}
	}
	return min
}
