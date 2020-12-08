/**
 * 得到两个字符串连续相同字符最长的数量
 * @param {string} s1 
 * @param {string} s2 
 */

const longestContinuousCommonStringXq = function (s1, s2) {
    // 生成二维数组, 每项都是0
    const m = s1.length
    const n = s2.length
    const dl = Array.from(new Array(m+1), ()=> new Array(n+1).fill(0))
    // 遍历s1 和 S2
    // 相同 dl[i-1][j-1]+1
    // 不同取dl[i][j-1], dl[i-1][j]里较大的数
    for(let i = 1; i<=m; i++){
        for(let j =1; j<=n; j++){
            if(s1[i-1] === s2[j-1]){
                dl[i][j]=dl[i-1][j-1]+1
            }
            dl[i][j]=Math.max(dl[i][j-1], dl[i-1][j])
        }
    }
    return dl[m][n]
}