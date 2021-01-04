var singleNumberJZ = function(nums) {
  nums.sort((a, b) => a - b)

  for (let i = 0;i < nums.length - 1; i+=2) {
      if (nums[i] !== nums[i + 1]) {
          return nums[i]
      }
  }

  return nums.pop()
};