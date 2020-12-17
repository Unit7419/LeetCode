export const minPath = dp => {
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (j && !i) dp[i][j] = dp[i][j - 1] + dp[i][j];
      if (i && !j) dp[i][j] = dp[i - 1][j] + dp[i][j];
      if (i && j) dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + dp[i][j];
    }
  }

  return dp.slice(-1)[0].slice(-1)[0];
};

// [
//   [1, 2, 3],
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// ==>
// [
//   [1, 3, 6],
//   [2, 4, 7],
//   [3, 5, 8],
// ];
