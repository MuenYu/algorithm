package main

import "fmt"

func main() {
	nums := []int{2, 7, 9, 3, 1}
	fmt.Println(robAnswer(nums))
}

func robAnswer(nums []int) int {
	if len(nums) < 1 {
		return 0
	}
	if len(nums) == 1 {
		return nums[0]
	}
	if len(nums) == 2 {
		return maxAnswer(nums[0], nums[1])
	}
	//dp[i] : 偷盗 至 第 i个房子时，所获取的最大利益
	//在小贼偷盗的过程中，不可能转回头去到自己已经偷过的房间！（太蠢）小偷只需要每次将财物搬到下一个房间就行！可以复用 nums 节约内存
	nums[1] = maxAnswer(nums[0], nums[1])
	for i := 2; i < len(nums); i++ {
		nums[i] = maxAnswer(nums[i-2]+nums[i], nums[i-1]) //能偷尽量偷，所以只用比前两个
	}
	return nums[len(nums)-1]
}

func maxAnswer(a, b int) int {
	if a > b {
		return a
	}
	return b
}
