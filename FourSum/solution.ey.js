/*
 * @Date: 2021-01-02 21:30:32
 * @LastEditors: elegantYu
 * @LastEditTime: 2021-01-02 22:34:42
 * @Description:
 */

//  copy 一下解题思路

const fourSum = (nums, target) => {
  const res = [];
  const s = nums.sort((_, __) => _ - __);
  const length = nums.length;

  if (length < 4) return res;

  for (let i = 0; i < length - 3; i++) {
    // 当前数与之前数一样  去重
    if (i > 0 && s[i] === s[i - 1]) continue;
    // 连续相加若大于target 以后的数必然大于target
    if (s[i] + s[i + 1] + s[i + 2] + s[i + 3] > target) break;
    // 若当前与倒数三位之和小于target 其内的遍历必然小于target
    if (s[i] + s[length - 3] + s[length - 2] + s[length - 1] < target) continue;

    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && s[j] === s[j - 1]) continue;
      if (s[i] + s[j] + s[j + 1] + s[j + 2] > target) break;
      if (s[i] + s[j] + s[length - 2] + s[length - 1] < target) continue;

      // 双指针 j + 1  && length - 1 逐渐内缩
      let left = j + 1;
      let right = length - 1;

      while (left < right) {
        // 判断left right 两数之和是否等于 target - i - j
        if (s[left] + s[right] < target - s[i] - s[j]) {
          // 小了 左指针右移
          left++;
        } else if (s[left] + s[right] > target - s[i] - s[j]) {
          // 大了 右指针左移
          right--;
        } else {
          res.push([s[i], s[j], s[left], s[right]]);
          // 加完之后继续内缩判断
          left++;
          right--;
          // 若现在与上次一样 继续下个
          while (left < right && s[left] == s[left - 1]) left++;
          while (left < right && s[right] == s[right + 1]) right--;
        }
      }
    }
  }

  return res;
};
