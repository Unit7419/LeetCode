/**
 * @param {string} digits
 * @return {string[]}
 */
export const letterCombinationsJZ = function(digits) {
    if (!digits) {
        return []
    }
    const numberMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    function dfs(digitsArr, result) {
        if (digitsArr.length === 0) {
            return result
        }
        result = getCombination(result, numberMap[digitsArr.shift()])
        return dfs(digitsArr, result)
    }
    const digitsArr = digits.split('')
    const tempResult = numberMap[digitsArr.shift()].split('')

    return dfs(digitsArr, tempResult)
};

function getCombination(result, b) {
    const tempResult = []
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < b.length; j++) {
            tempResult.push(result[i] + b[j])
        }
    }
    return tempResult
}
