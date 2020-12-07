export const longestCommonString: (s1: string, s2: string) => number = (
  s1,
  s2
) => {
  const matrix = Array.from(Array(s1.length + 1), () =>
    Array(s2.length + 1).fill(0)
  );

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1; // 对角

        continue;
      }

      matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]); // 错位
    }
  }

  return matrix[s1.length][s2.length];
};

// 1234567 vs 1357 矩阵
// [
// [ 0, 0, 0, 0, 0 ],
// [ 0, 1, 1, 1, 1 ],
// [ 0, 1, 1, 1, 1 ],
// [ 0, 1, 2, 2, 2 ],
// [ 0, 1, 2, 2, 2 ],
// [ 0, 1, 2, 3, 3 ],
// [ 0, 1, 2, 3, 3 ],
// [ 0, 1, 2, 3, 4 ],
// ]
