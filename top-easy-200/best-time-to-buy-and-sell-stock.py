from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) == 1:
            return 0
        result = 0
        min = prices[0]
        for i in range(1, len(prices)):
            if prices[i-1] < min:
                min = prices[i-1]
            temp = prices[i] - min
            if temp > result:
                result = temp
        return result


s = Solution()
li = [7,6,4,3,1]
print(s.maxProfit(li))
