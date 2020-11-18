package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {
	tree := TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val:   9,
			Left:  nil,
			Right: nil,
		},
		Right: &TreeNode{
			Val: 20,
			Left: &TreeNode{
				Val:   15,
				Left:  nil,
				Right: nil,
			},
			Right: &TreeNode{
				Val:   7,
				Left:  nil,
				Right: nil,
			},
		},
	}
	DFSRecursion(&tree)
	fmt.Println("-----------------")
	DFS(&tree)
}

func DFSRecursion(t *TreeNode) {
	if t != nil {
		fmt.Println(t.Val)
	}
	if t.Left != nil {
		DFSRecursion(t.Left)
	}
	if t.Right != nil {
		DFSRecursion(t.Right)
	}
}

func DFS(t *TreeNode) {
	stack := make([]*TreeNode, 0) //手动维护的栈
	lastVisit := t                //用于表示上次访问节点

	for {
		//一直向下
		for t != nil {
			fmt.Println(t.Val)
			stack = append(stack, t)
			t = t.Left
		}
		t = stack[len(stack)-1] //走到头了，回溯
		if t.Right != nil && t.Right != lastVisit {
			t = t.Right
			continue
		}
		stack = stack[:len(stack)-1] //出栈
		lastVisit = t
		t = nil //此处的t其实是作为标记位，用于跳过上面的“一直向下”而直接回溯（右节点走过，左节点一定走过）

		if len(stack) == 0 { //如果栈为空说明遍历完毕
			return
		}
	}
}
