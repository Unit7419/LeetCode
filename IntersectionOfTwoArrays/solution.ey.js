/*
 * @Date: 2021-01-04 22:51:04
 * @LastEditors: elegantYu
 * @LastEditTime: 2021-01-04 22:56:49
 * @Description:
 */

const intersection = (num1, num2, res = []) => {
  num1.map(v => num2.includes(v) && !res.includes(v) && res.push(v));

  return res;
};
