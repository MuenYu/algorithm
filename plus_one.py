from typing import List

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        str_num = ''.join(map(str,digits))
        num = int(str_num)+1
        str_num = str(num)
        return list(map(int,str_num))

s = Solution()
print(s.plusOne([4,3,2,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,12,1,4,3,2,1,4,3,2,1]))