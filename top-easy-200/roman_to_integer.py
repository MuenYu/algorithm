class Solution:
    values = {
        'CM': 900,
        'CD': 400,
        'XC': 90,
        'XL': 40,
        'IX': 9,
        'IV': 4,
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1,
    }

    def romanToInt(self, s: str) -> int:
        result = 0
        values = Solution.values
        while len(s) > 0:
            for k in values:
                if s.startswith(k):
                    result += values[k]
                    s = s[len(k):]
                    break
        return result


s = Solution()
roman = "MCMXCIV"
print(s.romanToInt(roman))

