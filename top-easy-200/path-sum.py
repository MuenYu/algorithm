# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def hasPathSum(self, root: TreeNode, targetSum: int) -> bool:
        if root == None:
            return False
        cur_levels = [root]
        while len(cur_levels) > 0:
            temp = []
            for node in cur_levels:
                if node.left == None and node.right == None and node.val == targetSum:
                    return True
                if node.left != None:
                    node.left.val = node.left.val+node.val
                    temp.append(node.left)
                if node.right != None:
                    node.right.val = node.right.val+node.val
                    temp.append(node.right)

            cur_levels = temp
        
        return False
