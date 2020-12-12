/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/**
 * 假设某个字母坐标是[i,j] 
 * 需要判断 上 [i-1, j]  下[i+1, j] 左[i, j-1] 右[i, j+1] 是否是下一个字母
 * 还需要判断 左[i, j-1] 上 [i, ]是否已经出现过
 */
export const exist = function(board, word) {
    if(!word){
        return false
    }
   // dl 的行和列数
   const row = board.length
   const colom = board[0].length
   // 判断字符是否存在
    const dfs = function (i, j, board, word, index) {
        if(i<0 || i>= row || j<0 || j >= colom || board[i][j] !== word[index]) {
            return false
        }
        if(index === word.length-1) {return true}
        var temp = board[i][j]
        board[i][j]='-'
        // 继续判断上下左右是否是下一个字母
        const res = dfs(i-1, j, board, word, index+1) ||
        dfs(i, j-1, board, word, index+1) || 
        dfs(i, j+1, board, word, index+1) ||
        dfs(i+1, j, board, word, index+1)
        board[i][j] = temp
        return res
    }

    for (let i = 0; i<row; i++){
        for(let j=0; j< colom; j++){
           if(dfs(i,j,board,word, 0)){
               return true
           }
        }
    }

    return false

}



