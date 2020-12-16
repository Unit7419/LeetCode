/*
 * @Date: 2020-12-16 18:21:24
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-16 22:19:28
 * @Description: 文本转树结构
 */

const Tree = (root = 'root', children = []) => {
  return {
    value: root,
    children,
  };
};

/**
 * @description:  从第一层开始，找最后一个child，若存在继续找，不存在建空tree，直到递归次数与缩进层数相同
 * @param {*} tree  整个树
 * @param {*} value 该行内容
 * @param {*} tab 该行的缩进层级
 * @param {*} layIdx  初始化层级索引 0
 * @return {*} 不用return
 */
const getParent = (tree, tab, value, layIdx = 0) => {
  if (tab < layIdx) {
    return true;
  }

  if (!tree.children.length || tab === layIdx)
    tree.children.push(Tree(tab === layIdx ? value : ''));

  const lastChild = tree.children[tree.children.length - 1];

  return getParent(lastChild, tab, value, layIdx + 1);
};

// 获取缩进层级
const getLayer = (s, i = 0) => {
  if (!s[i]) {
    return getLayer(s, i + 1);
  } else {
    return i;
  }
};

// 缩进净化
const pureTab = (s, i) => s.slice(i * 2).join();

// 无子元素 删除children
const pureTree = tree => {
  if (tree.children.length) {
    tree.children.forEach(t => pureTree(t));
  } else {
    delete tree.children;
  }
};

export const convertTreeEy = s => {
  // 先获取第一层
  const rootTree = Tree();
  const rows = s.split(/\n/);

  for (let i = 0; i < rows.length; i++) {
    const isEmpty = rows[i].replace(/\s/g, '').length;
    const layers = !isEmpty ? 0 : getLayer(rows[i].split(/\s/)) / 2;
    const content = !isEmpty ? '' : pureTab(rows[i].split(/\s/), layers);

    getParent(rootTree, layers, content);
  }

  pureTree(rootTree)

  return rootTree;
};
