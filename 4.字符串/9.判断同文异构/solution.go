package main

import "fmt"

func main() {
	s1 := "abcc"
	s2 := "abbc"
	fmt.Println(mysolve(s1, s2))
	fmt.Println(answer(s1, s2))
}

func mysolve(s1, s2 string) bool {
	len1, len2 := len(s1), len(s2)
	if len1 != len2 {
		return false
	}
	map1 := make(map[uint8]int)
	map2 := make(map[uint8]int)

	for i := 0; i < len1; i++ {
		map1[s1[i]]++
		map2[s2[i]]++
	}
	if len(map1) != len(map2) {
		return false
	}
	for k, v := range map1 {
		if v != map2[k] {
			return false
		}
	}
	return true
}

func answer(s1, s2 string) bool {
	if len(s1) != len(s2) {
		return false
	}

	m := make(map[rune]int, len(s1))

	//把第一个字符串录入到 map[字符]出现次数
	for _, v := range s1 {
		m[v]++
	}

	//遍历第二个字符串，当出现不同字符时说明有问题
	//如果s1的字符a出现次数多于s2，则必有s2的字符b出现次数多于s1
	//这种情况下就会出现map有一个值被减为0的情况
	for _, v := range s2 {
		if m[v] == 0 {
			return false
		}
		m[v]--
	}
	return true
}
