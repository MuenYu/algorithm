// https://leetcode.com/problems/text-justification
// AC but slow

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let i = 0, j = 1, width = maxWidth - words[0].length;
    const result = [];
    while (true) {
        // the last line
        if (i == words.length - 1) {
            result.push(lastLineFormat([words[i]], maxWidth));
            break;
        } else if (j == words.length - 1 && width >= words[j].length + 1) {
            result.push(lastLineFormat(words.slice(i, j + 1), maxWidth));
            break;
        }
        // the word can be added
        else if (width >= words[j].length + 1) {
            width -= words[j].length + 1;
            ++j;
        }
        // the line is full, go to next line
        else {
            if (j - i == 1) {
                result.push(lastLineFormat([words[i]], maxWidth));
            } else {
                result.push(lineFormat(words.slice(i, j), width + j - i - 1));
            }
            i = j;
            j = i + 1;
            width = maxWidth - words[i].length;
        }
    }
    return result;
};

function lastLineFormat(arr, maxWidth) {
    let str = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        str += ' ' + arr[i]
    }
    return str + ' '.repeat(maxWidth - str.length);
}

function lineFormat(arr, space) {
    const spaceNum = arr.length - 1;
    const spaces = new Array(spaceNum).fill(Math.floor(space / spaceNum));
    const spaceMod = space % spaceNum;
    const tmp = [arr[0]];
    // console.log(`${spaces} ${spaceMod}`);
    for (let i = 1; i < arr.length; ++i) {
        if (i <= spaceMod) {
            tmp.push(' '.repeat(spaces[i - 1] + 1));
        } else {
            tmp.push(' '.repeat(spaces[i - 1]));
        }
        tmp.push(arr[i]);
    }
    return tmp.join('');
}

const input = ["What", "must", "be", "acknowledgment", "shall", "be"];
const maxWidth = 16;

// const input = ["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"];
// const maxWidth = 20;
console.log(fullJustify(input, maxWidth));