/*
 * @Date: 2020-12-10 11:19:54
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-10 17:21:42
 * @Description:
 */

// 判断条件，左子树所有节点需小于根节点，右子树所有节点需大于根节点
// 中序遍历树，并插入数组

export const isValidBSTEY = root => {
  const list = []

  const backList = (root) => {
    if (root) {
      backList(root.left)
      list.push(root.val)
      backList(root.right)
    }
  }

  backList(root)

  for (let i = 0; i < list.length; i++) {
    if (list[i] >= list[i + 1]) return false
  }

  return true
};
