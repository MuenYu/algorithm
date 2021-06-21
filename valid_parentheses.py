class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 == 1:
            return False
        stack = []
        for i in range(len(s)):
            if s[i] == '(' or s[i] == '[' or s[i] == '{':
                stack.append(s[i])
            elif len(stack) < 1:
                return False
            else:
                if s[i] == ')' and stack[len(stack)-1] == '(':
                    stack.pop(len(stack)-1)
                elif s[i] == '}' and stack[len(stack)-1] == '{':
                    stack.pop(len(stack)-1)
                elif s[i] == ']' and stack[len(stack)-1] == '[':
                    stack.pop(len(stack)-1)
                else:
                    return False
        return len(stack) == 0


s = Solution()
print(s.isValid("){"))
