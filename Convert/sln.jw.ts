// s  原始字符串
// r  矩阵行号
// c_ 当前列号
// c  列号
// m  矩阵
export const convert = (
  s,
  r,
  c_ = 0,
  c = s.length,
  m = Array.from(Array(r), () => Array(c).fill(''))
) => {
  const join = m => m.flat().join('');

  const slice = () => {
    const temp = s[0];
    s = s.slice(1);
    return temp;
  };

  if (!s) return join(m);

  for (let rowIdx = 0; rowIdx < r; rowIdx++) {
    if (!s) return join(m);
    m[rowIdx][c_] = slice();
  }

  for (var rowIdx = r - 2, colNo_ = c_ + 1; rowIdx > 0; rowIdx--, colNo_++) {
    if (!s) return join(m);
    m[rowIdx][colNo_] = slice();
  }

  return convert(s, r, colNo_, c, m);
};
