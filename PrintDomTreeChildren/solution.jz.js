export function bfsJZ(root) {
    if (!root) {
        return []
    }

    const result =[]
    const queue = [root]
    while(queue.length) {
        const size = queue.length

        for (let i = 0; i < size; i++) {
            const item = queue.shift()
            result.push(item)
            if (item.children) {
                queue.push(...item.children)
            }
        }
    }
    return result
}

export function dfsJZ(root, result = []) {
    if (!root) {
        return result
    }

    result.push(root)

    if (root.children) {
        for (let i = 0; i < root.children.length; i++) {
            dfs(root.children[i], result)
        }
    }

    return result
}
