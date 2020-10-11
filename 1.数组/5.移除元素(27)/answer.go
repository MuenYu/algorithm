package main

import "fmt"

func main() {
	arr := []int{1, 2, 3, 4}
	fmt.Println(removeElementAnswer(arr, 1))
}

//我的方案与标答几乎一样，不做赘述
func removeElementAnswer(nums []int, val int) int {
	for i := 0; i < len(nums); {
		if nums[i] == val {
			nums = append(nums[:i], nums[i+1:]...)
		} else {
			i++
		}
	}
	return len(nums)
}
