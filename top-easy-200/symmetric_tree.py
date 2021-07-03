# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if root == None:
            return True
        current_level_tree_nodes = [root]
        while len(current_level_tree_nodes) > 0:
            temp = []
            temp_levels = []
            for node in current_level_tree_nodes:
                if node != None:
                    temp.append(node.val)
                    temp_levels.append(node.left)
                    temp_levels.append(node.right)
                else:
                    temp.append('x')
            if not self.check_list(temp):
                return False
            current_level_tree_nodes = temp_levels
        return True


    def check_list(self,temp:list) -> bool:
        length = len(temp)
        for i in range(length):
            if temp[i] != temp[length-i-1]:
                return False
        return True

root = TreeNode(
    val=1,
    left=TreeNode(
        val=2,
        right=TreeNode(
            val=3
        )
    ),
    right=TreeNode(
        val=2,
        right=TreeNode(
            val=3
        )
    )
)
s = Solution()
print(s.isSymmetric(root))