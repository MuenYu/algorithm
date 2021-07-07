from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums = sorted(nums)
        return nums[len(nums)//2]

s = Solution()
arr = [1,2,2,2]
print(s.majorityElement(arr))

