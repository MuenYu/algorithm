package main

import (
	"fmt"
)

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
	fmt.Println(maxDepth(&tree))
	fmt.Println(dfsMaxDepth(&tree))
}

//递归实现
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return max(maxDepth(root.Left), maxDepth(root.Right)) + 1
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// 非递归实现
func dfsMaxDepth(node *TreeNode) int {
	result := 0
	var stack []*TreeNode
	lastVisit := node
	for {
		for node != nil { //如果是继续向下
			stack = append(stack, node)
			node = node.Left
		}
		if len(stack) == 0 { //节点遍历完成，直接结束
			break
		}
		node = stack[len(stack)-1]
		if node.Right != nil && node.Right != lastVisit {
			//首次访问
			node = node.Right
			continue
		}
		//后序遍历来统计层级
		if result < len(stack) {
			result = len(stack)
		}
		stack = stack[:len(stack)-1]
		lastVisit = node
		node = nil
	}
	return result
}
