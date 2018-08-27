/**
 * @description Given an unsorted integer array, find the smallest missing positive integer.
 * @example
Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.
 * @author chris kwok
 * 
 */

function firstMissingPositive (nums) {
  if (!nums.length) return 1
  // 排序 截取负数部分
  nums = nums.splice(0, nums.sort((a, b) => a - b).findIndex(v => v > 0)) && nums
  // 处理后的数组为空 返回1
  if (!nums.length) return 1
  // 寻找临界值遍历 nums[nums.length - 1] + 1
  // 若未取出负数 临界值取 Math.max(nums.length, nums[nums.length - 1] + 1)
  for (let i = 1; i <= nums[nums.length - 1] + 1; i++) {
    if (nums.indexOf(i) === -1) {
      return i
    }
  }
}