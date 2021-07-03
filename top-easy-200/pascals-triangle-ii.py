from typing import List

class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        last_line = []
        for i in range(rowIndex+1):
            temp = [1 for _ in range(i+1)] # 默认用 1 来填充
            for j in range(1,i):
                temp[j] = last_line[j-1]+last_line[j] # 避免使用 append 提高性能
            last_line = temp
        return last_line

s = Solution()
print(s.getRow(3))