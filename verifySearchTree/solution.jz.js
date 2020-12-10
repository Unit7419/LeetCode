/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isValidBSTJZ = function (root, arr = []) {
    if (!root) {
        return true
    }
    const left = isValidBSTJZ(root.left, arr)

    if (!arr.length || root.val > arr[arr.length - 1]) {
        arr.push(root.val)
    } else {
        return false
    }

    const right = isValidBSTJZ(root.right, arr)

    return left && right
};
