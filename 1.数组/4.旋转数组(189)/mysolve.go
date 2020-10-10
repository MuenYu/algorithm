package main

func main() {
	nums := []int{1, 2, 3, 4, 5, 6, 7}
	rotate(nums, 3)
}

func rotate(nums []int, k int) {
	//简化参数k：移动与自身长度相同相当于没有移动
	k = k % len(nums)
	temp := make([]int, 0)                     //用于保存移动越界的部分
	temp = append(temp, nums[len(nums)-k:]...) //存储越界的部分
	for i := len(nums) - k - 1; i > -1; i-- {  //倒着将前面的部分往后移动
		nums[i+k] = nums[i]
	}
	//将越界的部分补充回数组的前面
	for k, v := range temp {
		nums[k] = v
	}
}

//思路与上面相同，但实现复杂
func rotate1(nums []int, k int) {
	k = k % len(nums)
	temp1 := nums[len(nums)-k:]
	temp2 := nums[:len(nums)-k]
	temp3 := make([]int, len(temp2))

	for k, v := range temp2 {
		temp3[k] = v
	}
	for i := 0; i < len(temp1); i++ {
		nums[i] = temp1[i]
	}
	for i, j := len(temp1), 0; i < len(temp1)+len(temp2); {
		nums[i] = temp3[j]
		i++
		j++
	}
}
