import org.junit.Test;

/**
 * https://leetcode-cn.com/problems/minimum-path-sum/
 */

public class MinPathSum {


    @Test
    public void test(){
//        int[][] path = {{1,3,1},{1,5,1},{4,2,1}};
        int[][] path = {{9,1,4,8}};
        System.out.println(minPathSum(path));
    }


    public int minPathSum(int[][] grid) {
        int sum = 0;
        if(grid.length == 1){
            for(int i = 0 ; i < grid[0].length ;i++){
                sum += grid[0][i];
            }
        }

        int[][] result = new int[grid.length][grid[0].length];
        for(int i = 0; i < grid.length ; i++){
            for(int j = 0 ; j < grid[0].length ; j++){
                if(i == 0 && j == 0){
                    result[0][0] = grid[0][0];
                    continue;
                }
                if(i != 0 && j != 0){
                    result[i][j] = Math.min(grid[i][j] + result[i - 1][j] , grid[i][j] + result[i][j - 1]);
                }
                if(i == 0){
                    result[i][j] = result[i][j - 1] + grid[i][j];
                }
                if(j == 0){
                    result[i][j] = result[i - 1][j] + grid[i][j];
                }
            }
        }

        sum = result[grid.length - 1][grid[0].length - 1];
        return sum;
    }

//    public int findMin(int[][] grid , int x , int y , int sum){
//        sum += Math.min(grid[x - 1][y] , grid[x][y - 1]);
//
//    }
}
