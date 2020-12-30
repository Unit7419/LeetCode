/*
 * @Date: 2020-12-30 11:19:00
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-30 11:36:56
 * @Description: 补做作业
 */

export const containsDuplicateEy = nums => {
  const hash = {};
  let sign = false;

  nums.forEach(v => (hash[v] === undefined ? (hash[v] = v) : (sign = true)));

  return sign;
};
