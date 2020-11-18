package main

import (
	"bytes"
	"fmt"
)

func main() {
	s := "26485311212"
	fmt.Println(comma(s))
	fmt.Println(answer(s))
}

func comma(s string) string {
	if len(s) <= 3 {
		return s
	}
	var buf bytes.Buffer
	lef := len(s) % 3
	if lef != 0 {
		for i := 0; i < lef; i++ {
			buf.WriteRune(rune(s[i]))
		}
		buf.WriteString(",")
	}
	for i, j := lef, 1; i < len(s); i++ {
		buf.WriteRune(rune(s[i]))
		if j/3 > 0 && j%3 == 0 && i < len(s)-1 {
			buf.WriteString(",")
		}
		j++
	}

	return buf.String()
}

func answer(s string) string {
	if s == "" {
		return ""
	}
	var buf bytes.Buffer
	buf.WriteByte(s[0]) //第一位一定是数字，所以可以直接赋值
	for i := 1; i < len(s); i++ {
		//判断当前位是否需要 ,
		if (len(s)-i)%3 == 0 {
			buf.WriteByte(',')
		}
		buf.WriteByte(s[i])
	}
	return buf.String()
}
