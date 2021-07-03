class Solution:
    def reverse(self, x: int) -> int:
        str_num = ''
        if x < 0:
            str_num = str(x)[1:]
            num = int(str_num[::-1])
            return -num
        else:
            str_num = str(x)
            num = int(str_num[::-1])
            return num

        
s = Solution()
num = 1534236469
print(num)
print(s.reverse(num))
