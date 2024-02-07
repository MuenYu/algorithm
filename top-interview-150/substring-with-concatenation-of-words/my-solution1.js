// https://leetcode.com/problems/substring-with-concatenation-of-all-words
// AC

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const wordLength = words[0].length;
    const checkLength = words.length * wordLength;
    if (s.length < checkLength) return [];
    const result = [];
    const map = new Map();
    // add words to map
    for (const word of words) {
        if (map.has(word)) {
            const val = map.get(word);
            map.set(word, val + 1);
        } else {
            map.set(word, 1);
        }
    }
    outer: for (let i = 0; i + checkLength <= s.length; ++i) {
        const str = s.substring(i, i + checkLength);
        const seen = new Map();
        for (let j = 0; j + wordLength <= str.length; j += wordLength) {
            const tmp = str.substring(j, j + wordLength);
            if (map.has(tmp)) {
                const count = map.get(tmp);
                if (seen.has(tmp)) {
                    const seenCount = seen.get(tmp);
                    if (seenCount<count) {
                        seen.set(tmp, seenCount+1);
                    }else {
                        continue outer;
                    }
                } else {
                    seen.set(tmp, 1);
                }
            } else {
                continue outer;
            }
        }
        console.log(str);
        result.push(i);
    }
    return result;
};

const s = "wordgoodgoodgoodbestword";
const words = ["word","good","best","word"];
// const s = "wordgoodgoodgoodbestword";
// const words = ["word", "good", "best", "good"];
console.log(findSubstring(s, words));
