export const findDuplicateSubtreesJZ = function(root) {
    if (!root) {
        return []
    }
    const map = new Map()
    const result = []

    function deep(root) {
        if (!root) {
            return '#'
        }

        const path = `${root.val},${deep(root.left)}${deep(root.right)}`
        if (map.has(path)) {
            map.set(path, map.get(path) + 1)
        } else {
            map.set(path, 1)
        }

        if (map.get(path) === 2) {
            result.push(root)
        }
        return path
    }

    deep(root)

    return result
};
