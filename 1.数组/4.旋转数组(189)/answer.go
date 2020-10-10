package main

import "fmt"

func main() {
	nums := []int{1, 2, 3, 4, 5, 6, 7}
	rotateAnswer(nums, 8)
	//reverse(nums)
	fmt.Println(nums)
}

/**
题目要求原地算法：按理来说不能开新的数据结构
可以通过下面这个奇淫技巧来实现数组向右移的效果

假设数组为 1 2 3 4 5 6， 要向右移动3格
1. 将整个数组反转 得到 6 5 4 3 2 1
2. 将前3位反转，得到 4 5 6 3 2 1
3. 将后3位反转，得到 4 5 6 1 2 3
*/
func rotateAnswer(nums []int, k int) {
	k = k % len(nums) // 简化参数k
	reverse(nums)     // 反转整个数组
	reverse(nums[:k]) //反转前k位, reslice操作的是原来的切片,所以可以直接传 nums[:k]
	reverse(nums[k:]) //反转后k位, reslice操作的是原来的切片,所以可以直接传 nums[k:]
}

//将数组元素反转
func reverse(nums []int) {
	for i := 0; i < len(nums)/2; i++ {
		nums[i], nums[len(nums)-1-i] = nums[len(nums)-1-i], nums[i]
	}
}
