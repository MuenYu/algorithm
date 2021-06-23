from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        i = 0
        length = len(nums)
        while i < length:
            gap = target - nums[i]
            # 如果存在，暴力算出
            if gap in nums[i+1:]:
                return [i,nums.index(gap,i+1)]
            # 如果不存在
            else:
              i += 1



s = Solution()
print(s.twoSum([3,2,4],6))