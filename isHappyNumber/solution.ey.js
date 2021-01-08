/*
 * @Date: 2021-01-07 13:36:09
 * @LastEditors: elegantYu
 * @LastEditTime: 2021-01-07 14:12:46
 * @Description:
 */
const powerSum = n =>
  n
    .toString()
    .split('')
    .reduce((s, v) => Math.pow(v, 2) + s, 0);

// 哈希存数据解法
export const isHappy = n => {
  if (!n) return false;

  const failHash = new Set();

  let sum = n;
  while (sum !== 1) {
    sum = powerSum(sum);

    if (failHash.has(sum)) {
      return false;
    } else {
      failHash.add(sum);
    }
  }

  return true;
};
