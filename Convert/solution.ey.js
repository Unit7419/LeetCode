/*
 * @Date: 2020-12-15 20:37:27
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-15 22:28:08
 * @Description:
 */

/**
 * @description: 顺时针旋转90°再看
 * @param {string} s
 * @param {number} numsRows
 * @return {string}
 */
export const convertEy = (s, numsRows) => {
  if (!s) return '';

  const buildMatrix = (s, row, idx = 0, matrix = []) => {
    if (idx >= s.length) return matrix;

    const remainder = idx % (row + row - 2);  //  获取余数
    const itemArr = Array(row).fill('');  //  初始化第一行数组

    // 若无余数，说明该数组要插满
    if (!remainder) {
      for (let i = 0; i < itemArr.length; i++) {
        itemArr[i] = s[idx + i];
      }
      idx += itemArr.length;
      matrix.push(itemArr.reverse());
    } else {
      // 找到位置再插
      itemArr[remainder - row + 1] = s[idx];
      matrix.push(itemArr);
      idx++;
    }

    return buildMatrix(s, row, idx, matrix);
  };

  const matrixArr = buildMatrix(s, numsRows);
  let res = '';

  // 拼接
  for (let i = matrixArr[0].length - 1; i > -1; i--) {
    for (let j = 0; j < matrixArr.length; j++) {
      const el = matrixArr[j][i] || '';
      res += el;
    }
  }

  return res.replace(/\s/g, '');
};
