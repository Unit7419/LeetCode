/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
export const longestCommonSubsequence = function(text1, text2) {
    const n= text1.length;
    const m=text2.length;
    // 生成二维数组, 每项都是0
    var arrForm = Array.from(new Array(n+1), ()=> new Array(m+1).fill(0));
    for(let i = 1; i<=n; i++ ){
        for (let j=1;j<= m; j++){
            if(text1[i-1] === text2[j-1]){
                arrForm[i][j]=arrForm[i-1][j-1]+1
            }else{
                arrForm[i][j] = Math.max(arrForm[i-1][j], arrForm[i][j-1])
            }
        }
    }
    return arrForm[n][m]
};
