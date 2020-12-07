/**
 * 最长公共子序列
 * @date 2020.12.06
 */
export const longestCommonSubsequence = function (text1, text2) {
  const l1 = text1.length;
  const l2 = text2.length;
  // 初始化长度矩阵
  const idxArr = Array.from(new Array(l1 + 1), () => new Array(l2 + 1).fill(0));

  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      if (text1[i] === text2[j]) {
        idxArr[i + 1][j + 1] = idxArr[i][j] + 1;
      } else {
        idxArr[i + 1][j + 1] = Math.max(idxArr[i + 1][j], idxArr[i][j + 1]);
      }
    }
  }

  return idxArr[l1][l2];
};
