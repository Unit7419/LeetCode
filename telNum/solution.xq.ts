/**
 * @param {string} digits
 * @return {string[]}
 */

 // 二分法 + 递归
var letterCombinations = function(digits) {
    let res = []

    if(!digits || digits.replace(1, '').length === 0){
        return res
    }
    if(digits.length === 1){
       return res = getNumStr(digits)
    }
    if(digits.length === 2){
        const A = getNumStr(digits[0])
        const B = getNumStr(digits[1])
        return res = getComBines(A, B)
    }

    const newdigits = digits.replace(1, '');
    const midIdx = Math.ceil(newdigits.length / 2)
    const left = newdigits.slice(0,midIdx)
    const right = newdigits.slice(midIdx)
    const leftCombs = letterCombinations(left)
    const rightCombs = letterCombinations(right)
    return getComBines(leftCombs, rightCombs)
};
 
const getComBines=(arr1, arr2)=>{
    let dl = []
    for (let i in arr1){
        for (let j in arr2){
            dl.push(arr1[i]+arr2[j])
        }
    }
    return dl
}

const getNumStr = (num)=>{
    const str = "abc def ghi jkl mno pqrs tuv wxyz"
    const arr = str.split(' ')
    return arr[num-2].split('')
}