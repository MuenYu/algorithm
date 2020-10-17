package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	l5 := ListNode{5, nil}
	l4 := ListNode{4, &l5}
	l3 := ListNode{3, &l4}
	l2 := ListNode{2, &l3}
	l1 := ListNode{1, &l2}
	fmt.Println(hasCycle(&l1))
}

func hasCycle(head *ListNode) bool {
	anchor := head
	steps := make(map[*ListNode]int)
	for i := 0; anchor != nil; i++ {
		if _, ok := steps[anchor]; ok {
			return true
		} else {
			steps[anchor] = anchor.Val
		}
		anchor = anchor.Next
	}
	return false
}
