export const pathExistJz = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(board, i, j, 0, word)) {
                return true
            }
        }
    }

    return false
};

function dfs(board, i, j, cur, word) {
    if (!inArea(board, i, j)) {
        return false
    }

    if (board[i][j] === true || board[i][j] !== word[cur]) {
        return false
    }

    if (cur === word.length - 1) {
        return true
    }
    const temp = board[i][j]
    board[i][j] = true

    const res = dfs(board, i - 1, j, cur + 1, word) || dfs(board, i + 1, j, cur + 1, word) || dfs(board, i, j - 1, cur + 1, word) || dfs(board, i, j + 1, cur + 1, word)

    board[i][j] = temp

    return res
}

function inArea(board, i, j) {
    return i >= 0 && i < board.length && j >= 0 && j < board[i].length
}
