// https://leetcode.com/problems/minimum-genetic-mutation
// slow

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
    if (startGene === endGene) return 0;

    const map = new Map();
    const visited = new Set();
    bank.push(startGene);
    for (let i = 0; i < bank.length; ++i) {
        for (let j = 0; j < bank.length; ++j) {
            if (i !== j && diffEq1(bank[i],bank[j])) {
                if (map.has(bank[i])) {
                    map.get(bank[i]).add(bank[j]);
                } else {
                    map.set(bank[i], new Set([bank[j]]));
                }
            }
        }
    }

    if (!map.has(endGene)) return -1;

    let mutations = new Set([startGene]), count = 1;
    while (mutations.size > 0) {
        const tmp = new Set();
        for (const mutation of mutations) {
            if (map.get(mutation).has(endGene)) return count;
            visited.add(mutation);
            for (const neighbor of map.get(mutation)) {
                if (!visited.has(neighbor)) {
                    tmp.add(neighbor);
                }
            }
        }
        mutations = tmp;
        ++count;
    }

    return -1;

    function diffEq1(str1, str2) {
        let count = 0;
        for (let i = 0; i < str1.length; ++i) {
            if (str1[i] !== str2[i]) {
                ++count;
            }
            if (count > 1) return false;
        }
        return count === 1;
    }
};

const startGene = "AACCGGTT";
const endGene = "AACCGGTA";
const bank = ["AACCGGTA"];
console.log(minMutation(startGene, endGene, bank));
