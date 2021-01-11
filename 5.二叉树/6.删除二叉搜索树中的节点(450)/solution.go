package main

import (
	"fmt"
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
	fmt.Println(deleteNodeAnswer(tree, 3))
}

func deleteNodeAnswer(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return nil
	}
	if key < root.Val {
		root.Left = deleteNodeAnswer(root.Left, key)
		return root
	}
	if key > root.Val {
		root.Right = deleteNodeAnswer(root.Right, key)
		return root
	}
	//到这里意味已经查找到目标
	if root.Right == nil {
		//右子树为空
		return root.Left
	}
	if root.Left == nil {
		//左子树为空
		return root.Right
	}
	minNode := root.Right
	for minNode.Left != nil {
		//查找后继
		minNode = minNode.Left
	}
	root.Val = minNode.Val
	root.Right = deleteMinNode(root.Right)
	return root
}

//删除树中最小节点
func deleteMinNode(root *TreeNode) *TreeNode {
	//如果左节点为空，左边走到头了
	if root.Left == nil {
		//把最左边的节点的右子树接回原来的位置
		pRight := root.Right
		root.Right = nil
		return pRight
	}
	//不为空就继续往下删
	root.Left = deleteMinNode(root.Left)
	return root
}

//自己的解法，爆内存了
func deleteNode(root *TreeNode, key int) *TreeNode {
	origin := root
	for root != nil && root.Val != key {
		if root.Val > key {
			root = root.Left
		} else if root.Val < key {
			root = root.Right
		}
	}
	if root.Left == nil && root.Right != nil {
		root = root.Right
	} else if root.Left != nil && root.Right == nil {
		root = root.Left
	} else if root.Left != nil && root.Right != nil {
		temp := root
		if temp.Right.Left != nil {
			temp = temp.Right
			var lastVisit *TreeNode
			for temp.Left != nil {
				lastVisit = temp
				temp = temp.Left
			}
			root.Val = temp.Val
			lastVisit.Left = nil
		} else {
			root.Val = root.Right.Val
			root.Right = nil
		}
	} else {
		root = nil
	}
	return origin
}
