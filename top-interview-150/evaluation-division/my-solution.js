/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const nodes = new Map();
    for (let i = 0; i < equations.length; ++i) {
        const num1 = equations[i][0];
        const num2 = equations[i][1];
        if (!nodes.has(num1))
            nodes.set(num1, new Map());
        if (!nodes.has(num2))
            nodes.set(num2, new Map());
        nodes.get(num1).set(num2, values[i]);
        nodes.get(num2).set(num1, 1 / values[i]);
    }
    const result = [];
    for (const [num1, num2] of queries) {
        if (!nodes.has(num1) || !nodes.has(num2)) result.push(-1);
        else {
            const set = new Set();
            let val = -1;
            dfs(num1, num2, 1);
            function dfs(num1, num2, tmp) {
                set.add(num1);
                if (nodes.get(num1).has(num2)) val = tmp * nodes.get(num1).get(num2);
                else {
                    for (const [k, v] of nodes.get(num1)) {
                        if (!set.has(k))
                            dfs(k, num2, tmp * v);
                    }
                }
            }
            result.push(val);
        }
    }
    return result;
};
