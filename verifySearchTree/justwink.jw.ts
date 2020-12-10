export const verify = node => {
  if (!node || !node.left || !node.right) {
    return true;
  }

  return [
    node.val > node.left.val,
    node.val < node.right.val,
    verify(node.left),
    verify(node.right),
  ].every(Boolean);
};

