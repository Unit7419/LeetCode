export const isHappyJZ = function(n) {
    const map = {}
    while (!map[n]) {
        if (n === 1) {
            return true
        }
        map[n] = true

        n = getNum(n)
    }

    return false
};

function getNum(n) {
    let result = 0
    while(n > 0) {
        const cur = n % 10
        n = Math.floor(n / 10)
        result += cur * cur
    }

    return result
}
