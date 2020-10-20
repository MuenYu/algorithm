/*
顺利通过，但并非最优解
*/
package main

import "fmt"

func main() {
	nums := []int{2, 7, 9, 3, 1}
	fmt.Println(rob(nums))
}

func rob(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	if len(nums) == 1 {
		return nums[0]
	}
	dp := make([]int, len(nums))
	for i := 0; i < len(dp); i++ {
		if i == 0 {
			dp[i] = nums[i]
		} else {
			dp[i] = max(dp[:i-1]) + nums[i]
		}
	}
	fmt.Println(dp)
	return max(dp)
}

func max(nums []int) int {
	max := 0
	for _, v := range nums {
		if v > max {
			max = v
		}
	}
	return max
}
