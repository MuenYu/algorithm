package main

import "fmt"

/**
此处避免与同文件夹下的 ListNode 重名，实际使用同 ListNode
*/
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
	fmt.Println(l1)
	fmt.Println("--------")
	//fmt.Println(removeNthFromEnd(&l1, 5))
	removeNthFromEndAnswer(&l4, 1)

}

func removeNthFromEndAnswer(head *ListNodeAnswer, n int) *ListNodeAnswer {
	l0 := &ListNodeAnswer{0, head}
	p := l0      //用于遍历的指针
	target := l0 //要删除的元素
	cur := l0    //要删除的元素的前一个元素
	for i := 0; ; i++ {
		if i >= n {
			cur = target
			target = target.Next
		}
		p = p.Next
		if p == nil {
			cur.Next = cur.Next.Next
			return l0.Next
		}
	}
}
