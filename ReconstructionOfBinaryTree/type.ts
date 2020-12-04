type TreeN = {
  val: number;
  left: TreeN;
  right: TreeN;
} | null;

type buildTree = (
  preorder: any,
  inorder: any,
  preBegin?: number,
  preEnd?: number,
  inBegin?: number,
  inEnd?: number
) => TreeN;
