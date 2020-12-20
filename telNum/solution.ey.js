/*
 * @Date: 2020-12-19 20:48:41
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-19 23:05:57
 * @Description:
 */
const wordMap = new Map([
  ['2', ['a', 'b', 'c']],
  ['3', ['d', 'e', 'f']],
  ['4', ['g', 'h', 'i']],
  ['5', ['j', 'k', 'l']],
  ['6', ['m', 'n', 'o']],
  ['7', ['p', 'q', 'r', 's']],
  ['8', ['t', 'u', 'v']],
  ['9', ['w', 'x', 'y', 'z']],
]);

export const letterCombinationsEy = digits => {
  if (!digits) return [];
  if (digits.length === 1) return wordMap.get(digits);

  const keys = digits.split('');

  const dfs = (keys, idx = 0, list = []) => {
    if (idx + 1 === keys.length) return list;

    const currentArr = list.length ? list : wordMap.get(keys[idx]);
    const nextArr = wordMap.get(keys[idx + 1]);

    const tempArr = [];
    for (let i = 0; i < currentArr.length; i++) {
      for (let j = 0; j < nextArr.length; j++) {
        tempArr.push(`${currentArr[i]}${nextArr[j]}`);
      }
    }

    return dfs(keys, idx + 1, [...tempArr]);
  };

  return dfs(keys);
};
