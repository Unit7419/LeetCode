/**
 * 
 * @description Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
 * 
 * @example Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
 * 
 * @author chris kwok

 */

function minWindow (s, t) {

  s = s.split('') || []
  t = t.split('') || []

  function getIndex (target, goal) {
    return target.indexOf(goal)
  }

  const allFirstMatchIndex = []
  const tempArr = s.slice(0)

  for (let i = 0; i < t.length; i++) {
    const currentIndex = getIndex(tempArr, t[i])

    if (currentIndex === -1) {
      return ''
    }
    tempArr.splice(currentIndex, 1, '占位')
    allFirstMatchIndex.push(currentIndex)
  }

  const matchIndex = allFirstMatchIndex.sort((a, b) => a - b)

  return s.join('').substring(matchIndex[0], matchIndex[matchIndex.length - 1] + 1)

}