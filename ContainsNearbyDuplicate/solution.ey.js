/*
 * @Date: 2021-01-07 16:40:05
 * @LastEditors: elegantYu
 * @LastEditTime: 2021-01-08 16:49:46
 * @Description:
 */

//  暴力解法不可取
const containsNearbyDuplicateForce = (nums, k) => {
  let i = 0;
  let res = false;
  while (i < nums.length && !res) {
    for (let j = 1; j <= k; j++) {
      if (nums[i] === nums[i + j]) {
        res = true;
      }
    }

    i++;
  }

  return res;
};

//  使用Set结构，一开始完全想不到啊
export const containsNearbyDuplicate = (nums, k) => {
  const s = new Set();

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (s.has(curr)) return true;

    s.add(curr);
    if (s.size > k) {
      s.delete([...s][0]);
    }
  }
  return false;
};
