package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	//第一个链表
	l1n3 := &ListNode{3, nil}
	l1n2 := &ListNode{2, l1n3}
	l1n1 := &ListNode{1, l1n2}
	//第二个链表
	l2n3 := &ListNode{5, nil}
	l2n2 := &ListNode{3, l2n3}
	l2n1 := &ListNode{1, l2n2}

	head := addTwoNumbers(l1n1, l2n1)
	for {
		if head == nil {
			break
		}
		fmt.Println(head)
		head = head.Next
	}
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	anchor := &ListNode{}
	head := anchor
	left := 0
	for l1 != nil || l2 != nil {
		v1, v2 := 0, 0
		if l1 != nil {
			v1 = l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			v2 = l2.Val
			l2 = l2.Next
		}
		temp := left + v1 + v2
		val := temp % 10
		left = temp / 10
		head.Next = &ListNode{val, nil}
		head = head.Next
	}
	if left != 0 {
		head.Next = &ListNode{left, nil}
	}
	return anchor.Next
}
