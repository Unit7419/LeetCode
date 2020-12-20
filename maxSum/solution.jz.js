
export const maxSubArrayJZ = function(nums) {
    let result = nums[0]
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        if (sum > 0) {
            sum += nums[i]
        } else {
            sum = nums[i]
        }
        result = Math.max(result, sum)
    }

    return result
};
