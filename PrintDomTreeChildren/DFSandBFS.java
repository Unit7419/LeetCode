import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class DFSandBFS {
    class TreeNode{
        TreeNode left;
        TreeNode right;
        String value;

        public TreeNode(){

        }

        public TreeNode(TreeNode left , TreeNode right , String value){
            this.left = left;
            this.right = right;
            this.value = value;
        }
    }


    @Test
    public void dfs(){
        TreeNode root = new TreeNode();
        List<TreeNode> nodeList = new ArrayList<>();
        nodeList.add(root);
        dfsFind(root , nodeList);
    }


    public void dfsFind(TreeNode root , List<TreeNode> nodeList){
        if(root.left != null){
            nodeList.add(root.left);
            bfsFind(root.left , nodeList);
        }
        if(root.right != null){
            nodeList.add(root.right);
            bfsFind(root.right , nodeList);
        }
    }


    @Test
    public void bfs(){
        TreeNode root = new TreeNode();
        List<TreeNode> nodeList = new ArrayList<>();
        nodeList.add(root);
        bfsFind(root , nodeList);
    }

    public void bfsFind(TreeNode root , List<TreeNode> nodeList){
        if(root.left == null){
            return;
        }
        if(root.right == null) {
            return;
        }
        nodeList.add(root.left);
        nodeList.add(root.right);
        bfsFind(root.left , nodeList);
        bfsFind(root.right , nodeList);

    }

}
