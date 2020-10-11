package main

import "fmt"

func main() {
	arr := []int{1, 2, 3, 4}
	fmt.Println(removeElement(arr, 1))
}

func removeElement(nums []int, val int) int {
	for i := 0; i < len(nums); i++ {
		if nums[i] == val {
			nums = append(nums[:i], nums[i+1:]...)
			i--
		}
	}
	return len(nums)
}
