package main

import (
	"fmt"
)

func main() {
	str1 := "ABABAABBABBAAB"
	str2 := "AAB"

	fmt.Println(KmpSearch(str1, str2))
	//fmt.Println(strings.Index(str1,str2)) Golang 内置函数，达到相同目的
}

/**
KMP算法寻找存在位置
*/
func KmpSearch(haystack string, needle string) int {
	l1 := len(haystack)
	l2 := len(needle)
	next := getNextArr(needle)
	i, j := 0, 0 //分别用于表示主串和模式串的对比下标
	for i < l1 && j < l2 {
		//上次比较失败，且没有公共前后缀导致从头比较时，指针后移
		//当前位置相等时，指针后移
		if j == -1 || haystack[i] == needle[j] {
			j++
			i++
		} else {
			j = next[j]
		}
	}
	//说明比对成功
	if j == l2 {
		return i - j //得到开头位置
	}
	//否则不存在，返回-1
	return -1
}

/**
寻找最长公共前后缀
返回公共前后缀长度
*/
func maxSubCommonStr(str string) int {
	if len(str) == 0 || len(str) == 1 {
		return len(str) - 1
	}
	for i := 1; i < len(str); i++ {
		head := str[:len(str)-i]
		tail := str[i:]
		if head == tail {
			return len(str) - i
		}
	}
	return 0
}

/**
计算Next数组
*/
func getNextArr(str string) []int {
	result := make([]int, len(str))
	result[0] = -1
	for i := 0; i < len(str)-1; i++ {
		result[i+1] = maxSubCommonStr(str[:i+1])
	}
	return result
}
