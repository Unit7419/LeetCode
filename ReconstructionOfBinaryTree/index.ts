/**
 * 重建二叉树
 * @data 2020.12.04
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
export const buildTreeXq = function(preorder, inorder) {
    if(preorder.length===0){
        return null
    }
    // 根节点值
    let root = preorder[0]
    // 创建根节点
    let node = new TreeNode(root)
      // 找到根节点在中序遍历中的下标
      const i = inorder.indexOf(root)
      // 递归创建左右节点, 查找节点和下标的关系
      node.left = buildTreeXq(preorder.slice(1, i+1), inorder.slice(0,i))
      node.right = buildTreeXq(preorder.slice(i+1), inorder.slice(i+1))
  
  return node
  };


 