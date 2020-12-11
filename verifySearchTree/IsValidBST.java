import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class IsValidBST {


    @Test
    public void test(){
//        String[] nodes = new String[]{"5","4","6",null,null,"3","7"};
//        String[] nodes = new String[]{"2","1","3"};
//        String[] nodes = new String[]{"0","-1"};
        String[] nodes = new String[]{"0","1"};
        TreeNode root = buildTreeNode(nodes);
        System.out.println(isValidBST(root));
    }




    public boolean isValidBST(TreeNode root) {
        return check(root);
    }


    public boolean check(TreeNode root){

        if(!checkRightNodeValue(root , root)){
            return false;
        }
        return true;
    }

    public boolean checkRightNodeValue(TreeNode root , TreeNode rootNode){

        if(root == null){
            return false;
        }
        if(root.left == null && root.right == null){
            return true;
        }

        if (root.left != null){
            if (root.left.val >= root.val){
                return false;
            }
        }

        if(root.right != null){
            if (root.right.val <= root.val || (root.left.val <= rootNode.val && root != rootNode)){
                return false;
            }
        }

        checkRightNodeValue(root.right , rootNode);
        checkRightNodeValue(root.left , rootNode);

        return true;
    }

    /**
     * 构建树结构
     * @param nodes
     * @return
     */
    public TreeNode buildTreeNode(String[] nodes){
        if(nodes[0] != null){
            TreeNode root = new TreeNode(Integer.valueOf(nodes[0]));
            List<String> list = Arrays.asList(nodes);
            int deep = (int) (Math.log(Double.valueOf((nodes.length + 1) + ""))/Math.log(2));
            List<TreeNode> nodeList = new ArrayList<>();
            nodeList.add(root);
            List<String> tempList = new ArrayList<>();
            TreeNode leftNode = new TreeNode();
            TreeNode rightNode = new TreeNode();
            TreeNode pNode = new TreeNode();
            for(int i = 1 ; i < deep ; i++){
                int begin = (int) Math.pow(2.0 , Double.valueOf(i + "")) - 1;
                int end = (int) Math.pow(2.0 , Double.valueOf(i + 1 + "")) - 2;
                tempList = list.subList(begin , end + 1);
                for(int j = 0 ; j < nodeList.size() ; j++){
                    pNode = nodeList.get(j);
                    int leftNodeIndex = j * 2;
                    int rightNodeIndex = j * 2 + 1;
                    if(tempList.get(leftNodeIndex) != null){
                        leftNode = new TreeNode(Integer.valueOf(tempList.get(leftNodeIndex)));
                        pNode.left = leftNode;
                    }else {
                        pNode.left = null;
                    }
                    if (tempList.get(rightNodeIndex) != null){
                        rightNode = new TreeNode(Integer.valueOf(tempList.get(rightNodeIndex)));
                        pNode.right = rightNode;
                    }else {
                        pNode.right = null;
                    }
                }
                nodeList.clear();
                nodeList.add(leftNode);
                nodeList.add(rightNode);
            }
            return root;
        }else{
            return null;
        }
    }

    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
}
