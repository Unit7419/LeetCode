import org.junit.Test;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Exist {

    @Test
    public void test(){
//        char[][] chars =
//                new char[][]{{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
//        String word = "ABCCED";
        char[][] chars =
                new char[][]{{'A', 'A'}};
        String word = "AA";
        System.out.println(exist(chars , word));
    }


    public boolean exist(char[][] board, String word) {
        if (board == null || board[0] == null || board.length == 0 || board[0].length == 0 || word == null || word.equals("")) {
            return false;
        }
        boolean[][] isVisited = new boolean[board.length][board[0].length];
        char[] chs = word.toCharArray();

        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == chs[0]) {
                    if (bfs(board, i, j, isVisited, chs, 0)) return true;
                }
            }
        }
        return false;
    }

    private boolean bfs(char[][] board, int i, int j, boolean[][] isVisited, char[] chs, int index) {

        if (index == chs.length) {
            return true;
        }
        if (i < 0 || j < 0 || i == board.length || j == board[0].length || isVisited[i][j] || board[i][j] != chs[index]) {
            return false;
        }
        isVisited[i][j] = true;
        boolean res = bfs(board, i + 1, j, isVisited, chs, index + 1)
                || bfs(board, i - 1, j, isVisited, chs, index + 1)
                || bfs(board, i, j + 1, isVisited, chs, index + 1)
                || bfs(board, i, j - 1, isVisited, chs, index + 1);
        isVisited[i][j] = false;
        return res;
    }


//    public boolean exist(char[][] board, String word) {
//
//        //获取行数
//        int rows = board.length;
//        //获取列数
//        int lines = board[0].length;
//
//        if(rows == 1 && lines == 1 && word.length() == 1){
//            if(String.valueOf(board[0][0]).equals(word)){
//                return true;
//            }
//        }
//
//        boolean result = false;
//
//        char[] wordChar = word.toCharArray();
//
//
//        char checkChar;
//        char aim;
//
//        int xL = 0;
//        int xR = 0;
//        int yU = 0;
//        int yD = 0;
//
//
//        int[][] matrx = new int[rows][lines];
//
//        for(int k = wordChar.length ; k > 0 ; k--){
//            checkChar = wordChar[k - 1];
//            for(int i = 0 ; i < rows ; i++){
//                for(int j = 0 ; j < lines ; j++){
//                    aim = board[i][j];
//                    if (aim == checkChar){
//                        if(matrx[i][j] == 0){
//                            matrx[i][j] = 1;
//                        }else if(matrx[i][j] != 0){
//                            xL = (i - 1) > -1 ? matrx[i-1][j] : 0;
//                            xR = (i + 1) < rows ? matrx[i+1][j] : 0;
//                            yU = (j - 1) > -1 ? matrx[i][j-1] : 0;
//                            yD = (j + 1) < lines ? matrx[i][j+1] : 0;
//                            matrx[i][j] = Math.max(Math.max(xL,xR) , Math.max(yU,yD)) + 1;
//                        }
//                    }
//                }
//            }
//        }
//
//        Set<Character> set = new HashSet<>();
//        for(char item : wordChar){
//            set.add(item);
//        }
//
//
//        for(int i = 0 ; i < rows ; i++){
//            for(int j = 0 ; j < lines ; j++){
//                if(matrx[i][j] == set.size()){
//                    result = true;
//                    break;
//                }
//            }
//        }
//        return result;
//    }

    //思路1,没走通
//    public boolean exist(char[][] board, String word) {
//        return exist1(new ArrayList<>() , new ArrayList<>() , board , word , word.length() - 1);
//    }



    public boolean exist1(List<Node> currentCharNodeList , List<Node> prevCharNodeList , char[][] board, String word , int index) {

        boolean result = false;

        if(index == 0){
            return result;
        }


        char[] wordChar = word.toCharArray();

        currentCharNodeList = findNodes(board , wordChar[index]);

        prevCharNodeList = findNodes(board , wordChar[index - 1]);

        for(Node currentNode : currentCharNodeList){
            for(Node prevNode : prevCharNodeList){
                if((Math.abs(currentNode.x - prevNode.x) == 1 || Math.abs(currentNode.y - prevNode.y) == 1) &&
                        (Math.abs(currentNode.x - prevNode.x) == 1 && Math.abs(currentNode.y - prevNode.y) == 1)){
                    result = true;
                }
            }
        }

        return exist1(currentCharNodeList , prevCharNodeList , board , word , index - 1);
    }







    public List<Node> findNodes(char[][] board, char checkChar) {

        List<Node> nodeList = new ArrayList<>();

        //获取行数
        int rows = board.length;
        //获取列数
        int lines = board[0].length;

        char aim;
        Node node = new Node();
        for(int i = 0 ; i < rows ; i++){
            for(int j = 0 ; j < lines; j++){
                aim = board[i][j];
                if (aim == checkChar){
                    board[i][j] = '*';
                    node = new Node(i , j , aim);
                    nodeList.add(node);
                }
            }
        }

        return nodeList;
    }



    class Node {
        int x;
        int y;
        char value;

        public Node() {
        }

        public Node(int x, int y, char value) {
            this.x = x;
            this.y = y;
            this.value = value;
        }
    }

}
