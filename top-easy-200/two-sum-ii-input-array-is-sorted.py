from typing import List


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        i,j = 0,len(numbers)-1
        while i<j:
            sum = numbers[i]+numbers[j]
            if sum == target:
                return [i+1,j+1]
            elif sum > target:
                j -= 1
            else:
                i += 1

                


s = Solution()
li = [5, 25, 75]
print(s.twoSum(li, 100))
