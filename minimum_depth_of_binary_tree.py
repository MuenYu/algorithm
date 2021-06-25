class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if root == None:
            return 0

        # full_levels = 1  # 满二叉树层数
        max_levels = 0  # 最大层数
        levels = [root]  # 当前层的节点
        while len(levels) > 0:
            max_levels += 1
            temp_levels = []
            for node in levels:
                if node.left != None:
                    temp_levels.append(node.left)
                if node.right != None:
                    temp_levels.append(node.right)
                if node.left == None and node.right == None:
                    return max_levels
            levels = temp_levels
