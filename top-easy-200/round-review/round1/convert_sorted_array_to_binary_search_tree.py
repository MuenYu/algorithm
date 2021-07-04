from typing import List


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        if len(nums) == 0:
            return None
        root = TreeNode()
        mid = len(nums) // 2
        root.val = nums[mid]
        if mid > 0:
            root.left = self.sortedArrayToBST(nums[:mid])
        if mid + 1 < len(nums):
            root.right = self.sortedArrayToBST(nums[mid + 1:])
        return root


s = Solution()
li = [0, 1, 2, 3, 4, 5]

print(s.sortedArrayToBST(li))