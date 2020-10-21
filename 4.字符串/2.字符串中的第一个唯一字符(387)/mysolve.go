package main

import "fmt"

func main() {
	s := "loveleetcode"
	fmt.Println(firstUniqChar(s))
}

func firstUniqChar(s string) int {
	if len(s) == 0 {
		return -1
	}
	if len(s) == 1 {
		return 0
	}
	strArr := []byte(s)
x:
	for i := 0; i < len(strArr); i++ {
		for j := 0; j < len(strArr); j++ {
			if i == j {
				continue
			}
			if strArr[i] == strArr[j] {
				continue x
			}
		}
		return i
	}
	return -1
}
