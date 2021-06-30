class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        i, j = 0, len(s)-1
        while i < j:
            if not (s[i].isdigit() or s[i].isalpha()):
                i += 1
                continue
            if not (s[j].isdigit() or s[j].isalpha()):
                j -= 1
                continue
            if s[i] != s[j]:
                return False
            i += 1
            j -= 1
        return True


s = Solution()
string = "A man, a plan, a canal: Panama"
print(s.isPalindrome(string))
