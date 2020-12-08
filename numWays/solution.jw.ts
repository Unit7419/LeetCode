export const numWays = (n, x = 1, y = 1) =>
  ~[0, 1].indexOf(n) ? y % (1e9 + 7) : numWays(n - 1, y, x + y);
