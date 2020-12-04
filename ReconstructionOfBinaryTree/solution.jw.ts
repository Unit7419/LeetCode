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

export const buildTree: buildTree = (
  p,
  i,
  p1 = 0,
  p2 = p.length - 1,
  i1 = 0,
  i2 = i.length - 1
) => {
  const r = (...ps) => buildTree(p, i, ...ps);

  const val = p[p1];
  const pos = i.indexOf(val);
  const ll = pos - i1;

  return p1 >= p2 || i1 >= i2
    ? p1 === p2 && i1 === i2
      ? { val, left: null, right: null }
      : null
    : {
        val,
        left: r(p1 + 1, p1 + ll, i1, pos - 1),
        right: r(p1 + ll + 1, p2, pos + 1, i2),
      };
};
