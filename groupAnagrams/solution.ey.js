/*
 * @Date: 2021-01-08 16:55:35
 * @LastEditors: elegantYu
 * @LastEditTime: 2021-01-08 17:15:13
 * @Description: 
 */
export const groupAnagrams = (strs) => {
  const wordMap = new Map()

  for (let i = 0; i < strs.length; i++) {
    const curr = strs[i]
    const flat = curr.split('').sort().join('')

    if (wordMap.has(flat)) {
      const arr = wordMap.get(flat)
      arr.push(curr)
      wordMap.set(flat, arr)
    } else {
      wordMap.set(flat, [curr])
    }
  }

  return [...wordMap.values()]
}