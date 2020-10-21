/**
做法与标答相同，故不放出标答
*/
package main

import "fmt"

func main() {
	s := []byte{98, 99, 100}
	fmt.Println(s)
	reverseString(s)
	fmt.Println(s)
}

func reverseString(s []byte) {
	for i, j := 0, len(s)-1; i < j; {
		s[i], s[j] = s[j], s[i]
		i++
		j--
	}
}
