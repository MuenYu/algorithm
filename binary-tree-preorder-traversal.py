from typing import List
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        result = []
        def recursion(root: TreeNode):
            if root == None:
                return None
            result.append(root.val)
            if root.left != None:
                recursion(root.left)
            if root.right != None:
                recursion(root.right)
        recursion(root)
        return result

