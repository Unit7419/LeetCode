export const numJewelsInStonesJZ = function(jewels, stones) {
    const map = {}
    let result = 0

    for (let s of jewels) {
        map[s] = true
    }

    for (let s of stones) {
        s in map && result++
    }

    return result
};