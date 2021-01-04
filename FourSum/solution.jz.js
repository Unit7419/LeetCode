export const fourSumJZ = function (nums, target) {
  if (nums.length < 4) {
    return []
  }

  if (nums.length === 4 && nums.reduce((a, b) => a + b) === target) {
    return [nums.sort((a, b) => a - b)]
  }
  nums.sort((a, b) => a - b)

  const result = []
  for (let i = 0; i < nums.length - 3; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1
      let right = nums.length - 1

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]])
          right--
          while (nums[right] === nums[right + 1]) right--
          left++
          while (nums[left] === nums[left - 1]) left++
          continue
        }

        if (sum > target) {
          right--
          while (nums[right] === nums[right + 1]) right--
        } else {
          left++
          while (nums[left] === nums[left - 1]) left++
        }
      }
    }
  }

  return result
};