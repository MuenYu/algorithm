package main

import "fmt"

/**
思路与我相同，写法比我简洁
*/

type ListNodeAnswer struct {
	Val  int
	Next *ListNodeAnswer
}

func main() {
	//第一个链表
	l1n3 := &ListNodeAnswer{3, nil}
	l1n2 := &ListNodeAnswer{2, l1n3}
	l1n1 := &ListNodeAnswer{1, l1n2}
	//第二个链表
	l2n3 := &ListNodeAnswer{5, nil}
	l2n2 := &ListNodeAnswer{3, l2n3}
	l2n1 := &ListNodeAnswer{1, l2n2}

	head := mergeTwoListsAnswer(l1n1, l2n1)
	for {
		if head == nil {
			break
		}
		fmt.Println(head)
		head = head.Next
	}

}

func mergeTwoListsAnswer(l1 *ListNodeAnswer, l2 *ListNodeAnswer) *ListNodeAnswer {
	prehead := &ListNodeAnswer{}
	result := prehead
	for l1 != nil && l2 != nil {
		if l1.Val < l2.Val {
			prehead.Next = l1
			l1 = l1.Next
		} else {
			prehead.Next = l2
			l2 = l2.Next
		}
		prehead = prehead.Next
	}
	if l1 != nil {
		prehead.Next = l1
	}
	if l2 != nil {
		prehead.Next = l2
	}
	return result.Next
}
