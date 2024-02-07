// https://leetcode.com/problems/reverse-words-in-a-string
// it is the best solution

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const words = [];
    let anchor = s.length - 1, flag = false;
    for (let i = s.length - 1; i > -1; --i) {
        if (s[i] === ' ' && flag) {
            flag = false;
            words.push(s.substring(i + 1, anchor + 1));
        }
        else if (i == 0) {
            if (flag) {
                words.push(s.substring(0, anchor + 1));
            } else if (s[i]!==' '){
                words.push(s[0]);
            }
        }
        else if (s[i] !== ' ' && !flag) {
            flag = true;
            anchor = i;
        }
    }
    return words.join(' ');
};

// const s = "the sky is blue";
const s = "a good   example";
// const s = "  hello world  ";
// const s = " asdasd df f";
console.log(reverseWords(s));