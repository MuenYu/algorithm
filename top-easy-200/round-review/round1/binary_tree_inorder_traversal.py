from typing import List
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        if root == None:
            return []
        result = []
        def recursion(root:TreeNode):
            if root.left != None:
                recursion(root.left)
            result.append(root.val)
            if root.right != None:
                recursion(root.right)
        recursion(root)
        return result

