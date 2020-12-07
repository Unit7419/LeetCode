export const longestContinuousCommonString = (s1, s2) => {
  const stack = [];
  const matrix = Array.from(Array(s1.length + 1), () =>
    Array(s2.length + 1).fill(0)
  );

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      matrix[i][j] = s1[i - 1] === s2[j - 1] ? matrix[i - 1][j - 1] + 1 : 0;
      stack.push({
        count: matrix[i][j],
        position: i,
      });
    }
  }

  // return Math.max(...matrix.map(_ => Math.max(..._))); // Max length

  const { count, position } = stack.reduce(
    (_, data) => (data.count > _.count ? data : _),
    { count: 0 }
  );

  return count ? s1.substr(position - count, count) : -1;
};
