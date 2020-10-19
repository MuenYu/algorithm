package main

import (
	"fmt"
)

func main() {
	//nums := []int{10, 9, 2, 5, 3, 7, 101, 18}
	//nums := []int{4, 10, 4, 3, 8, 9}
	nums := []int{18, 55, 66, 2, 3, 54}
	fmt.Println(lengthOfLISAnswer(nums))
}

func lengthOfLISAnswer(nums []int) int {
	if len(nums) < 1 {
		return 0
	}
	dp := make([]int, len(nums))
	result := 1 //当前最佳结果（因为最少就是返回数组中的一个元素，所以保底都是1
	for i := 0; i < len(nums); i++ {
		dp[i] = 1 //dp[i] 表示以nums[i]结尾的最长上升子序列的长度
		for j := 0; j < i; j++ {
			if nums[j] < nums[i] {
				dp[i] = maxAnswer(dp[j]+1, dp[i])
			}
		}
		result = maxAnswer(result, dp[i])
	}
	return result
}

func maxAnswer(a, b int) int {
	if a > b {
		return a
	}
	return b
}
