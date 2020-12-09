/**
 * 得到两个字符串连续相同最长字符串
 * @param {string} s1 
 * @param {string} s2 
 */

export const longestContinuousCommonStringXq = function (s1: string, s2:string) {
    // 生成二维数组, 每项都是0
    const m = s1.length
    const n = s2.length
    const stack = []
    const dl = Array.from(new Array(m+1), ()=> new Array(n+1).fill(0))
    let result = ''
    // 遍历s1 和 S2
    // 相同 dl[i-1][j-1]+1
    // 不同取dl[i][j-1], dl[i-1][j]里较大的数
    for(let i = 1; i<=m; i++){
        for(let j =1; j<=n; j++){
            if(s1[i-1] === s2[j-1]){
                dl[i][j]=dl[i-1][j-1]+1
                result += s2[j-1]
            }else{
               
                
            }
        }
    }
    return dl[m][n]
}
