package main

import "fmt"

type ListNodeAnswer struct {
	Val  int
	Next *ListNodeAnswer
}

func main() {
	l5 := ListNodeAnswer{5, nil}
	l4 := ListNodeAnswer{4, &l5}
	l3 := ListNodeAnswer{3, &l4}
	l2 := ListNodeAnswer{2, &l3}
	l1 := ListNodeAnswer{1, &l2}
	fmt.Println(hasCycleAnswer(&l1))
}

//速度上与我的方法相近，但可以节约内存
func hasCycleAnswer(head *ListNodeAnswer) bool {
	if head == nil {
		return false
	}
	fast := head.Next // 快指针，每次走两步
	for fast != nil && head != nil && fast.Next != nil {
		if fast == head { // 快慢指针相遇，表示有环
			return true
		}
		fast = fast.Next.Next
		head = head.Next // 慢指针，每次走一步
	}
	return false
}
