// https://leetcode.com/problems/simplify-path

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const paths = path.split('/');
    const result = [];
    const set = new Set(['','.']);
    for (const s of paths) {
        if (s === '..') {
            result.pop();
        } else if (!set.has(s)) {
            result.push(s);
        }
    }
    return '/'+result.join('/');
};

const path = "/a/../../b/../c//.//";
console.log(simplifyPath(path));