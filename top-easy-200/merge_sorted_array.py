from typing import List


class Solution:
    # 使用标准库解法
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        for i in range(0, n):
            nums1[m+i] = nums2[i]
        nums1.sort()

