// https://leetcode.com/problems/game-of-life

var gameOfLife = function(board) {
    const newState = Array(board.length).fill(0).map(() => Array(board[0].length).fill(0));
  
    // 遍历游戏板，计算新状态
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        setNewState(i, j, board, newState);
      }
    }
  
    // 将游戏板更新为新状态
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j] = newState[i][j];
      }
    }
  
    // 计算新状态的辅助函数
    function setNewState(i, j, board, newState) {
      const cell = board[i][j];
      const colMax = board[i].length;
      const rowMax = board.length;
      let total = 0;
  
      // 计算周围活着的邻居数量
      if (i - 1 >= 0) total += board[i - 1][j]; // 北
      if (i - 1 >= 0 && j + 1 < colMax) total += board[i - 1][j + 1]; // 东北
      if (j + 1 < colMax) total += board[i][j + 1]; // 东
      if (i + 1 < rowMax && j + 1 < colMax) total += board[i + 1][j + 1]; // 东南
      if (i + 1 < rowMax) total += board[i + 1][j]; // 南
      if (i + 1 < rowMax && j - 1 >= 0) total += board[i + 1][j - 1]; // 西南
      if (j - 1 >= 0) total += board[i][j - 1]; // 西
      if (j - 1 >= 0 && i - 1 >= 0) total += board[i - 1][j - 1]; // 西北
  
      // 根据规则设置新状态
      if (cell === 1 && (total === 2 || total === 3)) {
        newState[i][j] = 1;
      } else if (cell === 0 && total === 3) {
        newState[i][j] = 1;
      }
    }
  };