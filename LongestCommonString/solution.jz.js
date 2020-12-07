/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
export const longestCommonSubsequence = function(text1, text2) {
    const l1 = text1.length
    const l2 = text2.length
    const dp = Array.from(new Array(l1 + 1), () => new Array(l2 + 1).fill(0))

    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[l1][l2]
};
