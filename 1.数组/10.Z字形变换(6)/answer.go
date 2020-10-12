package main

import (
	"fmt"
	"strings"
)

func main() {
	//str,numRows := "LEETCODEISHIRING",4
	str, numRows := "AB", 3
	fmt.Println(convertAnswer(str, numRows))
}

func convertAnswer(s string, numRows int) string {
	if numRows == 1 {
		return s
	}
	var b = []rune(s)
	var res = make([]string, numRows)
	var length = len(b)
	var period = numRows*2 - 2 // 是一个V字形 numRows*2（纵向和斜向合计） - 2(作为转向点重复计算过)
	for i := 0; i < length; i++ {
		var mod = i % period
		if mod < numRows { // 纵向
			res[mod] += string(b[i])
		} else { // 斜向
			res[period-mod] += string(b[i])
		}
	}
	return strings.Join(res, "")
}

/**
其实文字很难把这题说清楚（或许是表达能力弱了
最好还是去看看 教程 里的讲解
*/
