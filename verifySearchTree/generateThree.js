function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

export const generateThree = function (data) {
    if (!data.length || data[0] === null) {
        return null
    }
    if (!data[0]) {
        return null
    }
    const result = new TreeNode(data[0])
    const queue = [result]
    for (let i = 1; i < data.length;) {
        const item = queue.shift()

        if (data[i] === null) {
            item.left = null
        } else {
            const left = new TreeNode(data[i])
            item.left = left
            queue.push(left)
        }
        i++
        if (data[i] === null) {
            item.right = null
        } else {
            const right = new TreeNode(data[i])
            item.right = right
            queue.push(right)
        }
        i++
    }

    return result
};
