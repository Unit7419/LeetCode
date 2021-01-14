# 出现次数最多的子树元素和

> Authored by [sean](https://github.com/sean-sp)

> Original source [Leet code](https://leetcode-cn.com/classic/problems/most-frequent-subtree-sum/description/)

给你一个二叉树的根结点，请你找出出现次数最多的子树元素和。一个结点的「子树元素和」定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

你需要返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

示例1

输入：
```
        5
       / \
      2   -3
```

返回 [2, -3, 4]，所有的值均只出现一次，以任意顺序返回所有值。

示例2

输入：
```
        5
       / \
      2   -5
```

返回 [2]，只有2出现两次，-5只出现一次。