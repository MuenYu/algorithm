package main

import "fmt"

/**
 * Definition for a binary tree node. */
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {
	tree := &TreeNode{
		Val: 4,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val:   1,
				Left:  nil,
				Right: nil,
			}, Right: &TreeNode{
				Val:   3,
				Left:  nil,
				Right: nil,
			},
		}, Right: &TreeNode{
			Val:   7,
			Left:  nil,
			Right: nil,
		},
	}
	fmt.Println(searchBST(tree, 4))
}

func searchBST(root *TreeNode, val int) *TreeNode {
	for root != nil {
		if root.Val == val {
			return root
		} else if root.Val < val {
			root = root.Right
		} else {
			root = root.Left
		}
	}
	return nil
}
