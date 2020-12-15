/**
 * 复原IP地址
 * @date 2020.12.13
 */

export const restoreEy = origin => {
  if (origin.length < 4 || origin.length > 12) return [];

  const list = [];

  const dfs = (start, depth, curr) => {
    if (depth === 4) {
      if (start === origin.length) {
        // 最终长度相等 推入
        list.push(curr);
      }
      return;
    }

    let n = '';
    for (let i = start; i < start + 3; i++) {
      n += origin[i];

      if (Number(n) > 255) break;

      dfs(i + 1, depth + 1, curr + n + (depth === 3 ? '' : '.'));

      if (origin[start] === '0') break;
    }
  };

  dfs(0, 0, '');

  return list;
};
