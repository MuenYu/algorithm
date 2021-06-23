from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ""
        elif len(strs) == 1:
            return strs[0]
        else:
            prefix = strs[0]
            while len(prefix)>-1:
                for i in range(1,len(strs)):
                    if not strs[i].startswith(prefix):
                        prefix = prefix[:len(prefix)-1]
                        break
                else:
                    return prefix
            return ""

s = Solution()
print(s.longestCommonPrefix(["ab","a"]))
