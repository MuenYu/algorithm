// https://leetcode.com/problems/h-index
// as the same as my solution

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => b - a);
    let h = 0;
    for (let i = 0; i < citations.length; ++i) {
        if (citations[i] >= i + 1) {
            ++h;
            continue;
        }
        break;
    }
    return h;
};

const citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations));