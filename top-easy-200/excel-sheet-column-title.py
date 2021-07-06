class MySolution:
    def convertToTitle(self, columnNumber: int) -> str:
        lib = [
            'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
            'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'
        ]
        result = ""
        while columnNumber > 0:
            temp = columnNumber % 27
            columnNumber //= 27
            if temp == 0 and columnNumber == 1:
                result = 'Z' + result
                break
            result = lib[temp] + result

        return result


s = MySolution()
print(s.convertToTitle(52))