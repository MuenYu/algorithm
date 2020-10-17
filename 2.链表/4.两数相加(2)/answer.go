package main

import "fmt"

/**
思路与我相同，写法比我简洁一点
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

	head := addTwoNumbersAnswer(l1n1, l2n1)
	for {
		if head == nil {
			break
		}
		fmt.Println(head)
		head = head.Next
	}

}

func addTwoNumbersAnswer(l1 *ListNodeAnswer, l2 *ListNodeAnswer) *ListNodeAnswer {
	list := &ListNodeAnswer{0, nil}
	//这里用一个result，只是为了后面返回节点方便，并无他用
	result := list
	tmp := 0
	for l1 != nil || l2 != nil || tmp != 0 {
		if l1 != nil {
			tmp += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			tmp += l2.Val
			l2 = l2.Next
		}
		list.Next = &ListNodeAnswer{tmp % 10, nil}
		tmp = tmp / 10
		list = list.Next
	}
	return result.Next
}
