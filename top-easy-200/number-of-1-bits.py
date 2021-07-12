class Solution:
    def hammingWeight(self, n: int) -> int:
        return str(bin(n)).count('1')

s = Solution()
print(s.hammingWeight(11))

print('---')
print(10 & 1)
