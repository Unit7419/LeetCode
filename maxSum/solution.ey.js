/*
 * @Date: 2020-12-19 11:54:36
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-19 19:12:04
 * @Description:
 */
export const maxSubArrayEy = (base, max = base[0], i = 0) => {
  if (i === base.length) return max;

  let sum = 0;
  for (let x = i; x < base.length; x++) {
    sum += base[x];
    max = Math.max(max, sum);
  }

  return maxSubArrayEy(base, max, i + 1);
};
