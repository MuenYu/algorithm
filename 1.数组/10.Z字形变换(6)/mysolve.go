package main

import (
	"fmt"
	"strings"
)

func main() {
	//str,numRows := "LEETCODEISHIRING",4
	str, numRows := "AB", 3
	fmt.Println(convert(str, numRows))
}

func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}

	//用于保存输出
	printMap := make([][]string, numRows)
	i := 0         //用于表示当前位置
	direction := 0 //用于表示方向 0向下 1向右上
	for k, v := range s {
		printMap[i] = append(printMap[i], string(v))
		//判断方向并输入printMap
		if direction == 0 { //说明是向下的
			i++
			if i == 0 && k != 0 || i == numRows-1 { //到头了，需要更换方向
				direction = 1
			}
		} else { //说明是向右上的
			i--
			if i == 0 && k != 0 || i == numRows-1 { //到头了，需要更换方向
				direction = 0
			}
		}
	}
	result := "" //结果字符串
	for _, v := range printMap {
		result += strings.Join(v, "")
	}
	return result
}
