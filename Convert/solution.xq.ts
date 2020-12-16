/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export const convertXq = function(s, numRows) {
    if(!s || s.length ===1 || numRows === 1){
        return s
    }
    // 生成数组，length === numRows 每项用来记录每行的字符, 下标表示行数
    const arr = new Array(numRows).fill('')
    // 进行分组，每组字母个数： 2numRows -2
    const maxLength = 2*numRows -2
    // 找到每个字符需要存放到哪一项
    for(var i=0; i<s.length; i++){
        // 找i和行数的关系
        let j = i % maxLength // 0 1 2 3 4 5   6 7 8 9 10
        let index = Math.min(j, maxLength-j)
        arr[index] += s[i]
    }

    // 每行元素拼接
    let result = ""
    for(let c in arr){
       result += arr[c]
    }
    return result

};