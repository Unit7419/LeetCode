/**
 * @param {number} n
 * @return {number}
 */
export const numWaysJZ = function(n) {
    if (n < 2) {
        return 1
    }
    const arr = [1,1]

    while(n >= 2) {
        arr.push((arr[0] + arr[1]) % (1e9 + 7))
        arr.shift()
        n--
    }

    return arr.pop()
};
