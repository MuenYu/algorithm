package main

import (
	"fmt"
)

func main() {
	digits := []int{9, 9, 9}
	fmt.Println(plusOne(digits))
}

func plusOne(digits []int) []int {
	for i := len(digits) - 1; i > -1; i-- {
		digits[i] += 1
		if digits[i] == 10 {
			digits[i] = 0
			if i == 0 {
				digits = append([]int{1}, digits...)
			}
		} else {
			break
		}
	}
	return digits
}
