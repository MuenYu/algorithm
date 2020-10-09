package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(longestCommonPrefixAnswer([]string{"aaa", "", "aaa"}))

}

// 其实标答和我的思路一样，都是与第一个字符串比对，但是使用了Go的内置函数（我是自我实现，而且有频繁的字符数组与字符串转换），所以运行更快
func longestCommonPrefixAnswer(strs []string) string {
	if len(strs) < 1 {
		return ""
	}
	prefix := strs[0]
	for _, k := range strs {
		// golang 支持 for bool{} 循环，相当于循环三参数只写第二个（循环条件）
		for strings.Index(k, prefix) != 0 { // 只要有字符串不匹配当前前缀，就直接前缀长度-1
			if len(prefix) == 0 { // 要是减光了就返回空字符串
				return ""
			}
			prefix = prefix[:len(prefix)-1]
		}
	}
	return prefix
}

// tmd，标答真简洁
