package main

import (
	"fmt"
	"sort"
)

func main() {
	nums1 := []int{1, 2, 2, 1}
	nums2 := []int{1, 2}
	result := intersectAnswer(nums1, nums2)
	result2 := intersectSortAnswer(nums1, nums2)
	fmt.Println(result, result2)
}

//常规解法
func intersectAnswer(nums1 []int, nums2 []int) []int {
	m0 := map[int]int{}
	for _, v := range nums1 {
		//遍历nums1，初始化map
		m0[v] += 1
	}
	k := 0 //指针k，用于指示当前对比位置
	for _, v := range nums2 {
		//如果元素相同，将其存入nums2中，并将出现次数减1
		if m0[v] > 0 {
			m0[v] -= 1
			nums2[k] = v //起到将 nums2 改为结果数组的效果，以免新开数组，节约内存
			k++
		}
	}
	return nums2[0:k]
}

//排序解法
func intersectSortAnswer(nums1 []int, nums2 []int) []int {
	k, l, len1, len2 := 0, 0, len(nums1), len(nums2)
	result := make([]int, 0)
	// 数组排序
	sort.Ints(nums1)
	sort.Ints(nums2)
	for {
		if k < len1 && l < len2 {
			num1 := nums1[k]
			num2 := nums2[l]
			if num1 < num2 {
				k++
			} else if num1 > num2 {
				l++
			} else {
				result = append(result, num1)
				k++
				l++
			}
		} else {
			break
		}
	}
	return result
}
