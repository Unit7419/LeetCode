// js和java都是使用 IEEE754 格式来表示整数和浮点数 提前模 否则int溢出
export const numWays = (n, x = 1, y = 1) =>
  ~[0, 1].indexOf(n) ? y : numWays(n - 1, y % (1e9 + 7), (x + y) % (1e9 + 7));
