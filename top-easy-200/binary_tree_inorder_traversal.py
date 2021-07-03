from typing import List

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    # 用于返回结果
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        result = []
        if root == None:
            return []
        self.method(root,result)
        return result
    
    # 用于递归
    def method(self, root: TreeNode,result:list):
        if root.left != None:
            self.method(root.left,result)
        result.append(root.val)
        if root.right != None:
            self.method(root.right,result)


s = Solution()
root = TreeNode(
    val=1,
    right=TreeNode(
        val=2
    )
)
print(s.inorderTraversal(root))
