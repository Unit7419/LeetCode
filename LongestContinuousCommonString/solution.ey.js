/*
 * @Date: 2020-12-08 20:12:58
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-08 21:10:31
 * @Description:
 */
/**
 * @param {String} str1
 * @param {String} str2
 * @return {String}
 */
export const LongestContinuousCommonStringEy = (str1, str2) => {
  const strLen1 = str1.length;
  const strLen2 = str2.length;
  const matrix = Array.from(Array(strLen1 + 1), () =>
    Array(strLen2 + 1).fill('')
  );
  const strList = [];

  for (let i = 1; i <= strLen1; i++) {
    for (let j = 1; j <= strLen2; j++) {
      if (str1.substr(i - 1, 1) === str2.substr(j - 1, 1)) {
        matrix[i][j] = matrix[i - 1][j - 1] + str1.substr(i - 1, 1);
        strList.push(matrix[i][j]);
      } else {
        matrix[i][j] = '';
      }
    }
  }

  const longestStr = strList.sort((a, b) => b.length - a.length)[0] || -1;
  return longestStr;
};
