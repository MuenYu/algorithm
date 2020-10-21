package main

import "fmt"

func main() {
	s := "loveleetcode"
	fmt.Println(firstUniqCharAnswer(s))
}

func firstUniqCharAnswer(s string) int {
	var arr [26]int //定义一个长度为26的数组，用于保存每一位的最后一次出现位置
	for i, k := range s {
		arr[k-'a'] = i
	}
	for i, k := range s {
		if i == arr[k-'a'] {
			return i //如果之前没有出现过（arr[k-'a']没有被改动）则直接返回
		} else {
			arr[k-'a'] = -1 //如果之前出现过就把它改成-1
		}
	}
	return -1
}
