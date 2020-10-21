package main

import "fmt"

func main() {
	printNumbers(5)
}

func printNumbers(n int) {
	n += 1
	arr := make([]int, n)
	left := 0
	notFirst := false
	for arr[len(arr)-1] == 0 {
		if notFirst {
			printArr(arr)
		}
		arr[0] += 1
		for i := 0; i < len(arr); i++ {
			temp := arr[i] + left
			arr[i] = temp % 10
			left = temp / 10
		}
		notFirst = true
	}
}

func printArr(arr []int) {
	for i, flag := len(arr)-1, false; i > -1; i-- {
		if arr[i] != 0 {
			flag = true
		}
		if flag {
			fmt.Print(arr[i])
		}
	}
	fmt.Println()
}
