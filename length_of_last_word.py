class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        strs = s.split()
        if len(strs)>0:
            return len(strs[len(strs)-1])
        return 0

s = Solution()
print(s.lengthOfLastWord(" "))