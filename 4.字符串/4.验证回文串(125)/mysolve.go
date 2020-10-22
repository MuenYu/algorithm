package main

import (
	"fmt"
)

func main() {
	s := "0P"
	fmt.Println(isPalindrome(s))
}

func isPalindrome(s string) bool {
	if len(s) < 2 {
		return true
	}
	left, right := 0, len(s)-1
	for left < right {
		fmt.Printf("%d %d\n", s[left], s[right])
		if !isValid(s[left]) {
			left++
			continue
		}
		if !isValid(s[right]) {
			right--
			continue
		}
		if s[left] != s[right] {
			if isAlphabet(s[left]) && isAlphabet(s[right]) {
				if s[left] != s[right]+32 && s[left]+32 != s[right] {
					return false
				}
			} else {
				return false
			}
		}
		left++
		right--
	}
	return true
}

func isValid(n uint8) bool {
	return 47 < n && n < 58 || 64 < n && n < 91 || 96 < n && n < 123
}

func isAlphabet(n uint8) bool {
	return 64 < n && n < 91 || 96 < n && n < 123
}
