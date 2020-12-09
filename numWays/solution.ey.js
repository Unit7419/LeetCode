/*
 * @Date: 2020-12-09 13:22:49
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-09 15:06:30
 * @Description:
 */

export const numWaysEy = n => {
  const sumArr = [];
  sumArr[0] = 1;
  sumArr[1] = 1;

  for (let i = 2; i <= n; i++) {
    sumArr[i] = (sumArr[i - 1] + sumArr[i - 2]) % (1e9 + 7);
  }

  return sumArr[n];
};
