/**
 * 得到两个字符串连续相同字符最长的数量
 * @param {string} s1 
 * @param {string} s2 
 */

export const longestContinuousCommonStringXq = function (s1, s2) {
    // 生成二维数组, 每项都是0
    const m = s1.length
    const n = s2.length
    const stack = []
    const dl = Array.from(new Array(m+1), ()=> new Array(n+1).fill(0))
    // 遍历s1 和 S2
    // 相同 dl[i-1][j-1]+1, 连续的串只可能出现在对角线上
    // 不同取dl[i][j-1], dl[i-1][j]里较大的数
    for(let i = 1; i<=m; i++){
        for(let j =1; j<=n; j++){
            if(s1[i-1] === s2[j-1]){
                dl[i][j]=dl[i-1][j-1]+1
                stack.push({count: dl[i][j], position: i})
            }
        }
    }
    // count > 1, 出现连续的串，找到count大于1的; 找到count最大的项
    const maxCountData = stack.reduce((_, current)=> (current.count > _.count ? current : _), {count: 0})
    // 根据找出来的项从str1中拿到串
    const {count, position} = maxCountData
    return count? s1.substr(position-count, count): -1
}