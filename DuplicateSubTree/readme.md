# 寻找重复的子树

> Authored by [elegantYU](https://github.com/elegantYU)

> Original source [Leet code](https://leetcode-cn.com/leetbook/read/hash-table/xxm0i6/)

给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

两棵树重复是指它们具有相同的结构以及相同的结点值。

示例1

```
        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
```

下面是两个重复的子树：

```
      2
     /
    4
```

和

```
    4
```

因此，你需要以列表的形式返回上述重复子树的根结点