export const lengthOfLongestSubstringJZ = function(s) {
    if (s.length <= 1) {
        return s.length
    }

    let map = {}
    let result = 0
    let left = 0
    let right = 0

    for (; right < s.length; right++) {
        if (s[right] in map) {
            result = Math.max(result, right - left)
            left = Math.max(left, map[s[right]] + 1)
        }

        map[s[right]] = right
    }

    return Math.max(result, right - left)
};
