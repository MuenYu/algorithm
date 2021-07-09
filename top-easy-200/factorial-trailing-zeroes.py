class MySolution:
    def trailingZeroes(self, n: int) -> int:
        count = 0
        last = 1
        for i in range(2, n + 1):
            units = i % 10
            print("当前阶层至", i)
            print("其个位为", units)
            print('上轮的结果个位为', last)
            temp = last * units
            print("本轮结果为", temp)
            if temp % 10 == 0:
                count += 1
                last = temp // 10
            else:
                last = temp % 10
            print('-------')
        return count


s = MySolution()
print(s.trailingZeroes(22))


class Solution:
    def trailingZeroes(self, n: int) -> int:
        # count = 0
        # for i in range(2,n+1):
        #     while i>0:
        #         count += i/5
        #         i /= 5
        # return count
        count = 0
        while n > 0:
            count += n // 5
            n //= 5
        return count


s = Solution()
print(s.trailingZeroes(22))