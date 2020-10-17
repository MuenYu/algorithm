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
	fmt.Println(l1)
	fmt.Println("--------")
	//fmt.Println(removeNthFromEnd(&l1, 5))
	removeNthFromEnd(&l4, 1)

}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	size := 0
	l0 := ListNode{0, head}
	for listNode := &l0; ; {
		listNode = listNode.Next
		size++
		if listNode == nil {
			break
		}
	}
	for currentNode, i := &l0, 0; ; i++ {
		if i == size-n-1 {
			currentNode.Next = currentNode.Next.Next
			if i == 0 {
				return currentNode.Next
			} else {
				return head
			}
		}
		currentNode = currentNode.Next
	}
}
