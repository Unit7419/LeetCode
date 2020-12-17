export const minPath = matrix => {
  const dp = Array.from(Array(matrix.length), () =>
    Array(matrix[0].length).fill(0)
  );

  dp[0][0] = matrix[0][0];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j && !i) dp[i][j] = dp[i][j - 1] + matrix[i][j];
      if (i && !j) dp[i][j] = dp[i - 1][j] + matrix[i][j];
      if (i && j)
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + matrix[i][j];
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
