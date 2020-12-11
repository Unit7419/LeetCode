/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isValidBST = function(root) {
    // 规律
    // 任何一个二叉数， 当前根节点一定是左子树的上限， 一定是右子树的下限
   // 左子树 < 根节点 < 右节点  ==》 二叉数的中序遍历  且是升序
   // 二叉树中序遍历变成数组，判断数组是否是升序
   let list = []
    const backList = (root) => {
        if(root){
            root.left && backList(root.left)
            list.push(root.val)
            root.right && backList(root.right)
        }
    }
    backList(root)

    for(var i = 0; i<list.length; i++){
        if(list[i] >= list[i+1]) {return false}
    }

    return true

}