/**
尝试6次自解失败
*/
package main

import (
	"fmt"
)

func main() {
	//nums := []int{10, 9, 2, 5, 3, 7, 101, 18}
	//nums := []int{4, 10, 4, 3, 8, 9}
	nums := []int{18, 55, 66, 2, 3, 54}
	fmt.Println(lengthOfLIS(nums))
}

func lengthOfLIS(nums []int) int {
	if len(nums) == 0 {
		return 0
	} else if len(nums) == 1 {
		return 1
	}
	//数组简化
	for i := 0; i < len(nums)-1; {
		if nums[i] > nums[i+1] {
			nums = append(nums[:i], nums[i+1:]...)
		} else {
			i++
		}
	}
	steps := make([]int, 0)
	for i, count := 0, 1; i < len(nums)-1; i++ {
		if nums[i] < nums[i+1] {
			count++
		} else {
			steps = append(steps, count)
			count = 1
		}
		if i == len(nums)-2 {
			steps = append(steps, count)
		}
	}

	return max(steps)
	//fmt.Println(nums)
	//dp := make([]int, len(nums))
	//dp[0] = 1
	//lastNum := nums[0]
	//for i := 1; i < len(dp); i++ {
	//	if nums[i] > lastNum {
	//		dp[i] = dp[i-1] + 1
	//		lastNum = nums[i]
	//	} else {
	//		dp[i] = dp[i-1]
	//	}
	//}
	//return dp[len(dp)-1]
}

func max(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	max := nums[0]
	for i := 1; i < len(nums); i++ {
		if max < nums[i] {
			max = nums[i]
		}
	}
	return max
}
