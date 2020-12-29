/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
export const bestSeqAtIndexJZ = function(height, weight) {
    const arr = []
    for (let i = 0; i < height.length; i++) {
        arr.push([height[i], weight[i]])
    }

    arr.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1
        }

        if (a[0] === b[0]) {
            return b[1] - a[1]
        }

        return -1
    })

    const dp = new Array(arr.length).fill(1)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i][1] > arr[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return Math.max(...dp)
};
