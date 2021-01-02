/*
 * @Date: 2020-12-22 22:49:01
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-23 19:08:08
 * @Description:
 */

const threeSumClosest = (nums, target) => {
  let res = null;

  for (let x = 0; x < nums.length - 2; x++) {
    for (let y = x + 1; y < nums.length - 1; y++) {
      for (let z = y + 1; z < nums.length; z++) {
        const sum = nums[x] + nums[y] + nums[z];
        res = Math.abs(sum - target) > Math.abs(res - target) ? res : sum;

        if (x === 0 && y === 1 && z === 2) res = sum;
      }
    }
  }

  return res;
};
