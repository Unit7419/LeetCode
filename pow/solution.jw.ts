export const pow = (a, b, c = a, d = b > 0) =>
  b === 0 ? 1 : (d ? b === 1 : b === -1) ? (d ? a : 1 / a) : pow(a * c, d ? b - 1 : b + 1, c)