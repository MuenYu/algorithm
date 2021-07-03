from typing import List

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# 自解超时
class SelfSolution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        if len(nums) == 1:
            return TreeNode(val=nums[0])
        root = TreeNode()
        return self.recursion(nums, root)

    def recursion(self, nums: List[int], root: TreeNode) -> TreeNode:
        length = len(nums)
        if length == 2:
            return TreeNode(
                val=nums[1],
                left=TreeNode(
                    val=nums[0]
                )
            )
        elif length == 1:
            return TreeNode(
                val=nums[0]
            )
        elif length == 0:
            return TreeNode()
        mid = int(length/2)
        root.val = nums[mid]
        root.left = self.recursion(nums[:mid], root)
        root.right = self.recursion(nums[mid+1:], root)
        return root

class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        def helper(left, right):
            if left > right:
                return None

            # 总是选择中间位置左边的数字作为根节点
            mid = (left + right) // 2

            root = TreeNode(nums[mid])
            root.left = helper(left, mid - 1)
            root.right = helper(mid + 1, right)
            return root

        return helper(0, len(nums) - 1)



s = Solution()
arr = [0,1,2,3,4,5]
print(s.sortedArrayToBST(arr))
