// https://leetcode.com/problems/snakes-and-ladders

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
    // 获取棋盘的大小
    const n = board.length;
    // 计算目标位置
    const target = n * n;
    // 创建一个队列，初始位置为1，步数为0
    const queue = [[1, 0]];
    // 创建一个映射来记录每个位置对应的步数
    const steps = new Map();

    // 使用BFS算法搜索最短路径
    while (queue.length > 0) {
        const [pos, step] = queue.shift();

        // 如果当前位置为目标位置，返回步数
        if (pos === target) {
            return step;
        }

        // 遍历当前位置可以到达的下一步位置
        for (let next = pos + 1; next <= Math.min(pos + 6, target); ++next) {
            // 根据位置计算行和列
            const [row, col] = getPosition(next);
            // 获取下一步的最终位置（考虑蛇和梯子）
            const finalPos = board[n - row][col - 1] === -1 ? next : board[n - row][col - 1];

            // 如果下一步位置未访问过，加入队列，并更新步数和集合
            if (!steps.has(finalPos)) {
                queue.push([finalPos, step + 1]);
                steps.set(finalPos, step + 1);
            }
        }
    }

    // 辅助函数：根据位置和棋盘大小计算行和列
    function getPosition(num) {
        const row = Math.ceil(num / n);
        const col = (num - 1) % n + 1;
        // 根据行数奇偶性计算列数
        if (row % 2 === 0) {
            return [row, n - col + 1];
        } else {
            return [row, col];
        }
    }

    // 如果循环结束仍未找到目标位置，返回-1
    return -1;
};

// const board = [[-1, -1], [-1, 3]];
const board = [[-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, 35, -1, -1, 13, -1], [-1, -1, -1, -1, -1, -1], [-1, 15, -1, -1, -1, -1]];
// const board = [[-1,-1,-1],[-1,9,8],[-1,8,9]];
// const board = [[1,1,-1],[1,1,1],[-1,1,1]];
console.log(snakesAndLadders(board));