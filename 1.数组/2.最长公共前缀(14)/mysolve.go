package main

import "fmt"

func main() {
	fmt.Println(longestCommonPrefix([]string{"aaa", "aa", "aaa"}))
}

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	} else if len(strs) == 1 {
		return strs[0]
	} else {
		result := ""
		// i: 当前比较到了第 i 个字符
		// j: 当前正在用第一个字符串和第 j 个字符串作比较
		firstStr := []rune(strs[0]) //第一个字符串
		for i := 0; i < len(firstStr); i++ {
			for j := 1; j < len(strs); j++ {
				currentStr := []rune(strs[j])
				if i < len(currentStr) {
					if firstStr[i] != currentStr[i] {
						return result
					}
					if j == len(strs)-1 {
						result += string(firstStr[i])
					}
				} else {
					return result
				}
			}

		}
		return result
	}
}
