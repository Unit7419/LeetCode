/*
 * @Date: 2021-01-04 22:57:37
 * @LastEditors: elegantYu
 * @LastEditTime: 2021-01-04 23:23:48
 * @Description:
 */
const firstUniqueChar = (s, res = {}) => {
  s.split('').forEach(v => (res[v] = (res[v] || 0) + 1));

  const unique = Object.keys(res).filter(k => res[k] === 1);

  return unique.length ? unique[0] : ' ';
};
