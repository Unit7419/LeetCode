/**
 * @description  t.

You would like to spell out the given target string by cutting individual letters from your collection of stickers and rearranging them.

You can use each sticker more than once if you want, and you have infinite quantities of each sticker.

What is the minimum number of stickers that you need to spell out the target? If the task is impossible, return -1.
 *
 * @example Example 1:

Input:

["with", "example", "science"], "thehat"
Output:

3
Explanation:

We can use 2 "with" stickers, and 1 "example" sticker.
After cutting and rearrange the letters of those stickers, we can form the target "thehat".
Also, this is the minimum number of stickers necessary to form the target string.
Example 2:

Input:

["notice", "possible"], "basicbasic"
Output:

-1
Explanation:

We can't form the target "basicbasic" from cutting letters from the given stickers.
 * 
 * @author chris kwok
 */

function minStickers(stickers, target) {
  const wordsLists = Array.from(new Set(stickers.join('').split(''))).join('')
  let flag = true
  const targetMap = {}

  for (let i = 0; i < target.length; i++) {
    if (wordsLists.indexOf(target[i]) === -1) {
      flag = false
      break
    }
    targetMap[target[i]]
      ? targetMap[target[i]] += 1
      : targetMap[target[i]] = 1
  }

  if (!flag) return -1

  const stringMap = {}

  stickers.forEach(string => {
    // stringMap[string] = []
    stringMap[string] = {}
    for (let i = 0; i < string.length; i++) {
      // if (stringMap[string].find(ele => ele === string[i]) !== undefined) {
      //   stringMap[string].push(string[i])
      // }
      stringMap[string][string[i]]
        ? stringMap[string][string[i]] += 1
        : stringMap[string][string[i]] = 1
    }
  })

  // not completed yet
  

}