const longestCommonString = (s1, s2) => {
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

const map = (arr, k) =>
  arr
    .slice(0)
    .sort((a, b) => a[k] - b[k])
    .map(_ => _.id);

const bestSeqAtIndexJw = (h, w) => {
  const merge = h.map((v, i) => ({ h: v, w: w[i], id: i }));
  return longestCommonString(map(merge, 'h'), map(merge, 'w'));
};

bestSeqAtIndexJw([65,70,56,75,60,68], [100,150,90,190,95,110]);
// => 6

// length 1w 时 heap out of memory