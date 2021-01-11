package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {
	tree := &TreeNode{
		Val: 5,
		Left: &TreeNode{
			Val: 3,
			Left: &TreeNode{
				Val:   2,
				Left:  nil,
				Right: nil,
			}, Right: &TreeNode{
				Val:   4,
				Left:  nil,
				Right: nil,
			},
		}, Right: &TreeNode{
			Val:  6,
			Left: nil,
			Right: &TreeNode{
				Val:   7,
				Left:  nil,
				Right: nil,
			},
		},
	}
	fmt.Println(isBalanced(tree))
}

func isBalanced(root *TreeNode) bool {
	if root == nil {
		return true
	}
	if !isBalanced(root.Left) || !isBalanced(root.Right) {
		return false
	}
	lHeight := getMaxDepth(root.Left)
	rHeight := getMaxDepth(root.Right)
	if abs(lHeight-rHeight) > 1 {
		return false
	}
	return true
}

func getMaxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return max(getMaxDepth(root.Left), getMaxDepth(root.Right)) + 1
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func abs(a int) int {
	if a >= 0 {
		return a
	}
	return -a
}
