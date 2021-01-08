package main

import (
	"fmt"
	"math"
)

//Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {
	tree := &TreeNode{
		Val: 5,
		Left: &TreeNode{
			Val:   1,
			Left:  nil,
			Right: nil,
		}, Right: &TreeNode{
			Val: 4,
			Left: &TreeNode{
				Val:   3,
				Left:  nil,
				Right: nil,
			}, Right: &TreeNode{
				Val:   6,
				Left:  nil,
				Right: nil,
			},
		},
	}
	fmt.Println(isValidBST(tree))
}

func isValidBST(root *TreeNode) bool {
	return isBST(root, math.MinInt64, math.MaxInt64, true)
}

func isBST(root *TreeNode, min, max int, flag bool) bool {
	if flag == false { //当已经发现不是 二叉搜索树 时，直接返回false
		return false
	}
	if root == nil {
		return true
	}
	if root.Val <= min || root.Val >= max { //小于下界或大于上界则不是二叉搜索树
		return false
	}
	flag = flag && isBST(root.Left, min, root.Val, flag)
	flag = flag && isBST(root.Right, root.Val, max, flag)
	return flag
}
