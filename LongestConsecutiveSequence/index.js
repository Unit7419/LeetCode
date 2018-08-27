/**
 * @description Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.
 * @example Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 * @author chris kwok
 */

function longestConsecutive (arr) {

  arr = Array.from(new Set(arr)).sort((a, b) => a - b) || []
  
  const mapArr = {}
  let mapKey = arr[0]
  
  // 
  arr.forEach((v, i) => {
    if (!i) {
      mapArr[mapKey] = [v]
      return true
    }
    if (mapArr[mapKey]) {
      if (v - mapArr[mapKey][0] === 1) {
        mapArr[mapKey].unshift(v)
      } else {
        mapKey = v
        mapArr[mapKey] = [v]
      }
    }
  })
  //
  let maxLength = 0

  for (let k in mapArr) {
    maxLength = mapArr[k].length > maxLength ? mapArr[k].length : maxLength
  }

  return maxLength
}

// function longestConsecutive (arr) {

//   let mapArr = []

//   const lastEle = arr.sort((a, b) => a - b)[arr.length - 1]

//   mapArr = Array(lastEle).fill('')
//   // init 1
//   arr.forEach(v => mapArr[v] = v)

//   const map = {}
//   let mapKey = 0
//   // 2
//   mapArr.forEach(v => {
//     if (v.constructor === Number) {

//       map[mapKey] ? map[mapKey].push(v) : map[mapKey] = [v]

//     } else {

//       mapKey++

//     }
//   })
//   // 3
//   let maxLength = 0

//   for (let k in map) {

//     maxLength = map[k].length > maxLength ? map[k].length : maxLength

//   }

//   // return
//   return maxLength
  
// }

// longestConsecutive([1, 2, 3, 5, 6, 0]) // return 4