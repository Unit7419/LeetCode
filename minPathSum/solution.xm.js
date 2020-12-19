/**
 * @param {number[][]} grid
 * @return {number}
 */
export const minPathSumXm = function(matrix) {
  let m = matrix[0].length
  let n = matrix.length
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(i==0 && j>0){
        matrix[i][j]+=matrix[i][j-1]
      }
      if(i>0 && j==0){
        matrix[i][j] +=matrix[i-1][j]
      }
      if(i>0 && j>0){
        matrix[i][j]+=Math.min(matrix[i][j-1],matrix[i-1][j])
      }
    }
  }
  return matrix[n-1][m-1]
}