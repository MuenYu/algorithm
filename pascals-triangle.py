from typing import List


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = []
        for i in range(numRows):
            temp = [1 for _ in range(i+1)] # 默认用 1 来填充
            for j in range(1,i):
                temp[j] = result[i-1][j-1]+result[i-1][j] # 避免使用 append 提高性能
            result.append(temp)
        return result
