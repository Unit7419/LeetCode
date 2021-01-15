import org.junit.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FindRedundantConnection {


    @Test
    public void test(){
//        int[][] edges = {{1,2}, {2,3}, {3,4}, {1,4}, {1,5}};
//        int[][] edges = {{1,2}, {2,3}, {3,4}, {1,4}, {1,5},{5,6}};
        int[][] edges = {{1,3},{3,4},{1,5},{3,5},{2,3}};
//        int[][] edges = {{1,2} , {1,3} , {2,3}};

        System.out.println(findRedundantConnection(edges));
    }


//    public int[] findRedundantConnection(int[][] edges) {
//        int[] result = new int[]{};
//        if(edges.length == 0 || edges[0].length == 0){
//            return result;
//        }
//
//        Node parent = new Node();
//        Node node = new Node();
//        Node child = new Node();
//        List<Node> nodeList = new ArrayList<>();
//        for (int i = 0 ; i < edges.length ; i++){
//            if(i - 1 >= 0){
//                parent.setValue(edges[i-1][1]);
//                node.setParent(parent);
//            }
//            node.setValue(edges[i][0]);
//            child.setValue(edges[i][1]);
//            node.setChild(child);
//            nodeList.add(node);
//            node = new Node();
//            child = new Node();
//        }
//
//        for(int i = nodeList.size() - 1; i > -1 ; i--){
//            if(canReturnRoot(nodeList.get(i))){
//
//            }
//        }
//
//        return result;
//    }
//
//
//    public boolean canReturnRoot(Node node){
//        boolean result = false;
//        if(node.getParent() != null){
//            return canReturnRoot(node.getParent());
//        }else{
//            return true;
//        }
//    }
//
//
//    class Node{
//
//        public Node parent;
//        public int value;
//        public Node child;
//
//        public Node() {
//        }
//
//        public Node(Node parent, int value, Node child) {
//            this.parent = parent;
//            this.value = value;
//            this.child = child;
//        }
//
//        public Node getParent() {
//            return parent;
//        }
//
//        public void setParent(Node parent) {
//            this.parent = parent;
//        }
//
//        public int getValue() {
//            return value;
//        }
//
//        public void setValue(int value) {
//            this.value = value;
//        }
//
//        public Node getChild() {
//            return child;
//        }
//
//        public void setChild(Node child) {
//            this.child = child;
//        }
//    }



    public int[] findRedundantConnection(int[][] edges) {
        int[] result = new int[2];
        if(edges.length == 0 || edges[0].length == 0){
            return result;
        }

        int biggest = findBiggestValue(edges);
        int [][] matrx = new int[biggest + 1][biggest + 1];
        for(int i = 0 ; i < edges.length ; i++){
            int x = edges[i][0];
            int y = edges[i][1];
            matrx[x][y] = 1;
        }

        int showTimes = 0;
        int line = 0;
        for(int j = matrx[0].length - 1 ; j > -1 ; j--){
            for(int i = matrx.length - 1 ; i > -1 ; i--){
                if(matrx[i][j] == 1){
                    if(showTimes != 0){
                        line = j;
                        break;
                    }else{
                        showTimes++;
                    }
                }
            }
            showTimes = 0;
        }


        List<String> mapList = arrayToMapList(edges);

        String s = "";
        for(int i = mapList.size() - 1 ; i > -1 ; i--){
            s = mapList.get(i);
            int x = Integer.valueOf(s.split(",")[0]);
            int y = Integer.valueOf(s.split(",")[1]);
            if(y == line){
                if(matrx[x][y] == 1){
                    result[0] = x;
                    result[1] = y;
                    break;
                }
            }
        }
        return result;
    }

    public int findBiggestValue(int[][] edges){
        int value = 0;
        for (int i = 0 ; i < edges.length ; i++){
            for(int j = 0 ; j < edges[0].length ; j++){
                if (edges[i][j] > value){
                    value = edges[i][j];
                }
            }
        }
        return value;
    }

    public List<String> arrayToMapList(int[][] edges){
        List<String> stringList = new ArrayList<>();
        String s = "";
        for(int i = 0 ; i < edges.length ; i++){
            s = edges[i][0] + "," + edges[i][1];
            stringList.add(s);
            s = "";
        }
        return stringList;
    }
}
