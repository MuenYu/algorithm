package main

import "fmt"

func main() {
	nums := []int{2, 7, 11, 15}
	fmt.Println(twoSumAnswer(nums, 9))
}

//使用哈希表优化时间复杂度
/**
主要原理：遍历数组，将target - 当前遍历的元素得到的差值记作temp
如果 Map中存在temp 则直接返回
如果不存在 则将当前元素值作为key，下标记作value存入 Map
*/
func twoSumAnswer(nums []int, target int) []int {
	result := make([]int, 2)     //用于返回的结果数组
	hashMap := make(map[int]int) //哈希表
	for i := 0; i < len(nums); i++ {
		temp := target - nums[i]
		if v, ok := hashMap[temp]; ok {
			result[0] = i
			result[1] = v
			break
		}
		hashMap[nums[i]] = i
	}
	return result
}
