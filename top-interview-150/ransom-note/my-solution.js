// https://leetcode.com/problems/ransom-note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const runeMap = new Map();
    for (c of magazine) {
        if (runeMap.has(c)) {
            runeMap.set(c, runeMap.get(c) + 1);
        } else {
            runeMap.set(c, 1);
        }
    }
    for (c of ransomNote) {
        if (runeMap.has(c)) {
            const val = runeMap.get(c);
            if (val === 0) return false;
            runeMap.set(c, val - 1);
        } else {
            return false;
        }
    }
    return true;
};

const ransomNote = "aa";
const magazine = "ab";
console.log(canConstruct(ransomNote,magazine));