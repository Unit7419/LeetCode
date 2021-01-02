/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const threeSumClosestJZ = function(nums, target) {
    if (nums.length === 3) {
        return nums.reduce((pre, cur) => pre + cur)
    }
    nums.sort((a,b) => a - b)
    let curResult = Infinity

    for (let i = 0; i < nums.length - 1; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let left = i + 1;
        let right = nums.length - 1

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if (sum === target) {
                return sum
            }

            if (Math.abs(sum - target) < Math.abs(curResult - target)) {
                curResult = sum
            }

            if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }
    return curResult
};
