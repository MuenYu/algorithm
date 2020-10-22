package main

import "fmt"

func main() {
	A, B := "", ""
	fmt.Println(rotateString(A, B))
}

func rotateString(A string, B string) bool {
	if len(A) != len(B) {
		return false
	}
	if len(A) == 0 {
		return true
	}
l:
	for i := 0; i < len(A); i++ {
		for j := 0; j < len(A); j++ {
			if A[j] != B[j] {
				A = A[1:len(A)] + string(A[0])
				continue l
			}
		}
		return true
	}
	return false
}
