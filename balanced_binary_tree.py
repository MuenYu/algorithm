# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# 错误解法：一个看起来很像正确答案的错误答案
class MySolution:
    def isBalanced(self, root: TreeNode) -> bool:
        if root == None:
            return True

        full_levels = 1  # 满二叉树层数
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
            if 2**max_levels == len(temp_levels):
                full_levels += 1
            levels = temp_levels

        print(full_levels)
        print(max_levels)

        return max_levels-full_levels < 2
