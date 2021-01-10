export const groupAnagramsJZ = function(strs) {
    const map = {}

    strs.forEach(item => {
        const itemArr = item.split('')
        const str = itemArr.sort().join('')
        str in map ? map[str].push(item) : (map[str] = [item])
    })

    return Object.values(map)
};
