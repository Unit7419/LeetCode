/**
 * @param {number} n
 * @return {number}
 * numWays(n) = numWays(n-2) + numWays(n-1)
 */
export const numWays = function(n) {
    let dp = new Array(n).fill(0)
    dp[0] = dp[1] = 1;
    dp[2] = 2
    for(let i =3; i<=n; i++){
        dp[i] = dp[i-1]+ dp[i-2]
        dp[i] %= 1000000007
    }
    return dp[n]
}