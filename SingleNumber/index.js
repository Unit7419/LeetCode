/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
  }

  const singleIdx = Object.values(obj).findIndex(v => v === 1);

  return Object.keys(obj)[singleIdx];
};
