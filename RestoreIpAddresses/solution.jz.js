export const restoreIpAddressesJZ = function(s) {
    if (s.length < 4) {
        return []
    }

    const result = []
    for (let i = 1; i < s.length - 2; i++) {
        const n1 = parseInt(s.slice(0, i), 10)

        if (n1 > 255) {
            break
        }
        for (let j = i + 1; j < s.length - 1; j++) {
            const n2 = parseInt(s.slice(i, j), 10)
            if (n2 > 255) {
                break
            }
            for (let k = j + 1; k < s.length; k++) {
                const n3 = parseInt(s.slice(j, k), 10)
                if (n3 > 255) {
                    break
                }
                const n4 = parseInt(s.slice(k), 10)
                const tempResult = `${n1}.${n2}.${n3}.${n4}`
                if (n4 <= 255 && tempResult.length === s.length + 3) {
                    result.push(tempResult)
                }
            }
        }
    }
    return result
};
