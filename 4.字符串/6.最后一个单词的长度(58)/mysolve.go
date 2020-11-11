package main

import (
	"fmt"
	"strings"
)

func main() {
	s := "a "
	fmt.Println(lengthOfLastWord(s))
}

func lengthOfLastWord(s string) int {
	count := 0
	s = strings.Trim(s, " ")
	for i := len(s) - 1; i > -1; i-- {
		if isAlphabet(s[i]) {
			count++
		} else {
			return count
		}
	}
	return count
}

func isAlphabet(n uint8) bool {
	if n >= 'a' && n <= 'z' || n >= 'A' && n <= 'Z' {
		return true
	}
	return false
}
