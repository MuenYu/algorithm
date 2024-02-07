// https://leetcode.com/problems/minimum-genetic-mutation
// slow

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
    const queue = [[startGene, 0]];
    const bankSet = new Set(bank);
    const change = ['A', 'C', 'G', 'T'];

    while (queue.length > 0) {
        const [gene, steps] = queue.shift();
        if (gene === endGene) {
            return steps;
        }
        for (let i = 0; i < gene.length; i++) {
            for (let j = 0; j < change.length; j++) {
                const newGene = gene.slice(0, i) + change[j] + gene.slice(i + 1);
                if (bankSet.has(newGene)) {
                    queue.push([newGene, steps + 1]);
                    bankSet.delete(newGene);
                }
            }
        }
    }
    return -1;
};

const startGene = "AACCGGTT";
const endGene = "AACCGGTA";
const bank = ["AACCGGTA"];
console.log(minMutation(startGene, endGene, bank));
