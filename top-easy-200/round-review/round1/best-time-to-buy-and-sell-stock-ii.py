from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) < 2:
            return 0
        steps = [[0,0] for _ in range(len(prices))]
        steps[0][1] = -prices[0]
        for i in range(1,len(prices)):
            steps[i][0] = max(steps[i-1][0],steps[i-1][1]+prices[i])
            steps[i][1] = max(steps[i-1][1],steps[i-1][0]-prices[i])
        return steps[len(prices)-1][0]

s = Solution()
li = [1,2,3,4]
print(s.maxProfit(li))