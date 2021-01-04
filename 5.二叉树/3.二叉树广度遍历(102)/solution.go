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
	fmt.Println(levelOrderRecursion(&tree))
	fmt.Println(levelOrder(&tree))
}

func levelOrderRecursion(t *TreeNode) [][]int {
	return dfs(t, [][]int{}, 0)
}

func dfs(root *TreeNode, res [][]int, level int) [][]int {
	if root == nil {
		return res
	}
	if level == len(res) {
		res = append(res, []int{})
	}
	res[level] = append(res[level], root.Val)
	res = dfs(root.Left, res, level+1)
	res = dfs(root.Right, res, level+1)
	return res
}

func levelOrder(t *TreeNode) [][]int {
	var res [][]int                               //最终结果
	var currentLevel []*TreeNode = []*TreeNode{t} //当前层
	for level := 0; len(currentLevel) != 0; level++ {
		var temp []*TreeNode //下一层的临时结果
		res = append(res, []int{})
		for _, v := range currentLevel {
			if v != nil {
				if v.Left != nil {
					temp = append(temp, v.Left)
				}
				if v.Right != nil {
					temp = append(temp, v.Right)
				}
				res[level] = append(res[level], v.Val)
			}
		}
		if len(res[level]) == 0 {
			res = res[:len(res)-1]
		}
		currentLevel = temp //下一轮的当前层赋值
	}
	return res
}
