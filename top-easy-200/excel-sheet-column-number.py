class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        sum = 0
        round = 1
        for i in range(len(columnTitle)-1,-1,-1):
            sum += (ord(columnTitle[i])-64)*round
            round *= 26
        return sum

s = Solution()
print(s.titleToNumber("ZY"))
