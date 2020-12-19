export const maxSubArray = arr =>
  Math.max(
    ...arr.reduce((t, n, i) => [...t, t[i - 1] > 0 ? n + t[i - 1] : n], [])
  );
