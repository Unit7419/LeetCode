/*
 * @Date: 2020-12-12 14:52:34
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-12 18:50:41
 * @Description:
 */

export const pathExistEy = (board, word) => {
  // 获取横纵长度
  // 第一次遍历找到第一个字符，若无返回false，若有存入坐标
  // 获取当前坐标周围数据，若无返回false，若有判断是否已存入，已存入返回false，或存入坐标
  // 继续执行 3 
  const xLength = board[0].length
  const yLength = board.length
  let coordinate = word.split('').reduce((obj, s, i) => ({ ...obj, [i]: []}), {})

  // 判断周围是否匹配下个字符串
  const checkNextWord = (i, j, time) => {
    const noLeft = j - 1 < 0
    const noRight = j + 1 > xLength - 1
    const noTop = i - 1 < 0
    const noBottom = i + 1 > yLength - 1
    const nextIdx = time + 1

    if (nextIdx > word.length) return

    const left = noLeft ? null : board[i][j - 1]
    const right = noRight ? null : board[i][j + 1]
    const top = noTop ? null : board[i - 1][j]
    const bottom = noBottom ? null : board[i + 1][j]
    const paths = Object.values(coordinate).reduce((all, cur) =>  [...all, ...cur], [])

    if (!paths.includes(`${i}${j - 1}`) && left === word.substr([nextIdx], 1)) {
      coordinate[nextIdx].push(`${i}${j - 1}`)
      return checkNextWord(i, j - 1, nextIdx)
    }
    if (!paths.includes(`${i}${j + 1}`) && right === word.substr([nextIdx], 1)) {
      coordinate[nextIdx].push(`${i}${j + 1}`)
      return checkNextWord(i, j + 1, nextIdx)
    }
    if (!paths.includes(`${i - 1}${j}`) && top === word.substr([nextIdx], 1)) {
      coordinate[nextIdx].push(`${i - 1}${j}`)
      return checkNextWord(i - 1, j, nextIdx)
    }
    if (!paths.includes(`${i + 1}${j}`) && bottom === word.substr([nextIdx], 1)) {
      coordinate[nextIdx].push(`${i}${j - 1}`)
      return checkNextWord(i + 1, j, nextIdx)
    }

    return 
  }

  for (let i = 0; i < yLength; i++) {
    for (let j = 0; j < xLength; j++) {
      if (board[i][j] === word.substr(0, 1)) {
        coordinate[0].push(`${i}${j}`)
        checkNextWord(i, j, 0)
      }
    }
  }

  return coordinate[word.length - 1].length > 0
};

