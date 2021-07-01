from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        nums = sorted(nums)
        for i in range(0,len(nums)-1,2):
            if nums[i]!=nums[i+1]:
                return nums[i]
        return nums[len(nums)-1]

s = Solution()
nums = [4,1,2,1,2]
print(s.singleNumber(nums))