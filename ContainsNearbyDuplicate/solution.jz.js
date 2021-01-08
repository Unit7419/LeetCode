export const containsNearbyDuplicateJZ = function(nums, k) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map && Math.abs(map[nums[i]] - i) <= k) {
            return true
        } else {
            map[nums[i]] = i
        }
    }

    return false
};
