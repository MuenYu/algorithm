package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	//第一个链表
	l1n3 := &ListNode{3, nil}
	//l1n2 := &ListNode{2, l1n3}
	//l1n1 := &ListNode{1, l1n2}
	//第二个链表
	l2n3 := &ListNode{5, nil}
	//l2n2 := &ListNode{3, l2n3}
	//l2n1 := &ListNode{1, l2n2}

	head := mergeTwoLists(l1n3, l2n3)
	for {
		if head == nil {
			break
		}
		fmt.Println(head)
		head = head.Next
	}
}

func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 != nil && l2 != nil {
		head := &ListNode{}
		anchor := head
		if l1.Val > l2.Val {
			head.Next = l2
			l2 = l2.Next
		} else {
			head.Next = l1
			l1 = l1.Next
		}
		head = head.Next
		for {
			if l1 == nil {
				head.Next = l2
				return anchor.Next
			}
			if l2 == nil {
				head.Next = l1
				return anchor.Next
			}
			if l1.Val > l2.Val {
				head.Next = l2
				l2 = l2.Next
			} else {
				head.Next = l1
				l1 = l1.Next
			}
			head = head.Next
		}
	} else if l1 == nil {
		return l2
	} else {
		return l1
	}
}
