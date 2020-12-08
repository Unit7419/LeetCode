import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class AAAA {

    @Test
    public void test(){
//        String text1 = "pzupkr";
//        String text2 = "ubmrapg";

        String text1 = "ABCEFA";
        String text2 = "BEFAB";

//        String text1 = "abcba";
//        String text2 = "abcbcba";

        System.out.println(longestCommonSubsequence(text1 , text2));
    }

    public int longestCommonSubsequence(String text1, String text2) {
        if (text1.equals(text2)){
            return text1.length();
        }
        int count = 0;

        //目标(短)
        String targetString = text1.length() >= text2.length() ? text2 : text1;

        //目标(长)
        String compareString = text1.length() >= text2.length() ? text1 : text2;


        char[] targetChars = targetString.toCharArray();

        char[] compareChars = compareString.toCharArray();

        int[][] result = new int[targetChars.length + 1][compareChars.length + 1];

        //同DP
        for(int i = 1 ; i < targetChars.length + 1 ; i++){
            char check = targetChars[i-1];
            for(int j = 1 ; j < compareChars.length + 1 ; j++){
                if(check == compareChars[j-1]){
                    result[i][j] = result[i-1][j-1] + 1;
                }else{
                    //取两边最小值,过滤不连续
                    result[i][j] = Math.min(result[i-1][j] , result[i][j-1]);
                }
                if(result[i][j] > count){
                    count = result[i][j];
                }
            }
        }
        return count;
    }

}
