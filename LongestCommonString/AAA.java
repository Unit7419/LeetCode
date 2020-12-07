import org.junit.Test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;


/**
 * https://leetcode-cn.com/problems/longest-common-subsequence/submissions/
 * 尚未解决
 */
public class AAA {

    @Test
    public void test(){
        String text1 = "pzupkr";
        String text2 = "ubmrapg";

//        String text1 = "abcde";
//        String text2 = "ace";

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


        int[] matrxTar = new int[targetString.length()];
        int[] matrxCmp = new int[compareString.length()];


        for(int i = 0 ; i < matrxTar.length ; i++){
            matrxTar[i] = -1;
        }

        for(int i = 0 ; i < matrxCmp.length ; i++){
            matrxCmp[i] = -1;
        }

        List<Node> nodeList = new ArrayList<>();
        Node node = null;
        for(int i = 0 ; i < targetChars.length ; i++){
            char check = targetChars[i];
            for(int j = 0 ; j < compareString.length() ; j++){
                if(check == compareChars[j]){
                    node = new Node(j , i , check);
                    nodeList.add(node);
                }
            }
        }

        if(nodeList.size() == 0){
            return 0;
        }

        if(nodeList.size() == 1){
            return 1;
        }


//        Collections.sort(nodeList, new Comparator<Node>() {
//            @Override
//            public int compare(Node o1, Node o2) {
//                int totalO1 = o1.getX() + o1.getY();
//                int totalO2 = o2.getX() + o2.getY();
//                return (totalO1 - totalO2);
//            }
//        });


        Node start = nodeList.get(0);

        int tempCnt = 1;
        Node checkNode = null;
        for(int i = 1 ;  i < nodeList.size() ; i++){
            checkNode = nodeList.get(i);
            if(checkNode.getX() > start.getX() && checkNode.getY() > start.getY()){
                tempCnt++;
            }else{
//                tempCnt = 1;
            }
//            start = checkNode;
            if(tempCnt > count){
                count = tempCnt;
            }
        }

        return count;
    }
    class Node {
        int x ;
        int y ;
        char value;

        public Node(int x, int y, char value) {
            this.x = x;
            this.y = y;
            this.value = value;
        }

        public int getX() {
            return x;
        }

        public void setX(int x) {
            this.x = x;
        }

        public int getY() {
            return y;
        }

        public void setY(int y) {
            this.y = y;
        }

        public char getValue() {
            return value;
        }

        public void setValue(char value) {
            this.value = value;
        }
    }
}


