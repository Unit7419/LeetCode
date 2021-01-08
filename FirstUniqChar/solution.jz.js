export const firstUniqCharJZ = function(s) {
    if (!s) {
        return ' '
    }
    if (s.length === 1) {
        return s
    }
    const map = {}

    for (let str of s) {
        map[str] = map[str] ? map[str] + 1 : 1
    }

    for (let key in map) {
        if (map[key] === 1) {
            return key
        }
    }

    return ' '
};
