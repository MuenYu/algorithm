# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        if root == None:
            return True
        if not self.isBalanced(root.left) or not self.isBalanced(root.right):
            return False
        def maxDepth(root:TreeNode) -> int:
            if root == None:
                return 0 
            return max(maxDepth(root.left),maxDepth(root.right))+1
        left = maxDepth(root.left)
        right = maxDepth(root.right)
        gap = left - right
        if gap > 1 or gap <-1:
            return False
        return True