package main

import "fmt"

func main() {
	nums1 := []int{1, 2, 2, 1}
	nums2 := []int{1, 2}
	result := intersect(nums1, nums2)
	fmt.Println(result)
}

func intersect(nums1 []int, nums2 []int) []int {
	map1 := map[int]int{}
	map2 := map[int]int{}
	len1, len2, maxLen := len(nums1), len(nums2), 0
	if len1 < len2 {
		maxLen = len2
	} else {
		maxLen = len1
	}

	//遍历数组，将他们压缩为 [数字:出现次数] 的模式
	for i := 0; i < maxLen; i++ {
		if i < len1 {
			if v, ok := map1[nums1[i]]; ok {
				map1[nums1[i]] = v + 1
			} else {
				map1[nums1[i]] = 1
			}
		}
		if i < len2 {
			if v, ok := map2[nums2[i]]; ok {
				map2[nums2[i]] = v + 1
			} else {
				map2[nums2[i]] = 1
			}
		}
	}

	//保存结果数组
	result := make([]int, 0)
	//通过遍历map，对比得出两个数组的重复部分
	for k1, v1 := range map1 {
		for k2, v2 := range map2 {
			if k1 == k2 {
				round := 0
				if v1 > v2 {
					round = v2
				} else {
					round = v1
				}
				for i := 0; i < round; i++ {
					result = append(result, k1)
				}
			}
		}
	}

	return result
}
