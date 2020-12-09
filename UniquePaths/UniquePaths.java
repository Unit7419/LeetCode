import org.junit.Test;

public class UniquePaths {
    @Test
    public void test(){
        int m = 7;
        int n = 3;
        System.out.println(uniquePaths(m , n));
    }

    /**
     * https://leetcode-cn.com/problems/unique-paths/
     * @param m
     * @param n
     * @return
     */
    public int uniquePaths(int m, int n) {
        if (m == 0 || n == 0){
            return 1;
        }
        if(m == 1 || n == 1){
            return 1;
        }

        int[][] matrx = new int[m][n];

        for(int i = 0 ; i < m ; i++){
            matrx[i][0] = 1;
        }
        for(int j = 0 ; j < n ; j++){
            matrx[0][j] = 1;
        }

        for(int i = 1 ; i < m ; i++){
            for(int j = 1 ; j < n ; j++){
                matrx[i][j] = matrx[i - 1][j] + matrx[i][j - 1];
            }
        }
        return matrx[m - 1][n - 1];
    }
}