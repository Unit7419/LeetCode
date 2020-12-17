/**
 * @param {number[][]} grid
 * @return {number}
 */
export const minPathSum = function(grid) {
    if(!grid){
        return 0
    }
  let row = grid.length
  let col = grid[0].length
  // 第一行，
  for(let j=1; j< col; j++){
      grid[0][j] += grid[0][j-1]
  }
  // 第一列
  for(let i=1; i< row; i++){
      grid[i][0] += grid[i-1][0]
  }
  // 其他格子的最小值 
  for(let i=1; i< row; i++){
      for (let j=1; j< col; j++){
          grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])
      }
  }

    return grid[row-1][col-1]
};