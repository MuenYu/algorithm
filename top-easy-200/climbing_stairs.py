class Solution:
    steps = [0 for x in range(1000)]
    def climbStairs(self, n: int) -> int:
        if n < 1:
            return 0
        if n < 3:
            return n
        if self.steps[n] == 0:
            self.steps[n] = self.climbStairs(n-1)+self.climbStairs(n-2)
        return self.steps[n]

s = Solution()
print(s.climbStairs(44))
