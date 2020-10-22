package main

import (
	"fmt"
	"strings"
)

func main() {
	s := "0P"
	fmt.Println(isPalindromeAnswer(s))
}

func isPalindromeAnswer(s string) bool {
	if len(s) < 2 {
		return true
	}
	left, right := 0, len(s)-1
	s = strings.ToLower(s) //将字符串中的大写字母转换成小写字母，简化逻辑
	for left < right {
		fmt.Printf("%d %d\n", s[left], s[right])
		if !isValidAnswer(s[left]) {
			left++
			continue
		}
		if !isValidAnswer(s[right]) {
			right--
			continue
		}
		if s[left] != s[right] {
			if s[left] != s[right]+32 && s[left]+32 != s[right] {
				return false
			}
		}
		left++
		right--
	}
	return true
}

func isValidAnswer(n uint8) bool {
	return 47 < n && n < 58 || 64 < n && n < 91 || 96 < n && n < 123
}
