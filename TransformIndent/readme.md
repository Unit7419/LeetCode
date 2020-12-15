### Transform indent

> Authored by [justwink](https://github.com/justwink)

用户输入多行的字符串，根据每一行字符串的空格在根节点下生成对应的缩进关系的树结构

根节点
```
{
  value: 'root',
  children: [],
}
```

Example：

输入
```text
1
  2
    3
4
  5
  6
7
```

1 4 7所在行的空格数相等（都是0个），1 4 7分别生成 {value: 1},{value: 4},{value: 7} 且彼此为兄弟节点

2 为 1 的子节点

3 为 2 的子节点

5 6 彼此是兄弟节点（前面空格数相同均为2个）且为 4 的子节点

输出
```ts
{
  value: 'root',
  children: [
    {
      value: '1',
      children: [
        {
          value: '2',
          children: [
            {
              value: '3',
            }
          ],
        }
      ],
    },
    {
      value: '4',
      children: [
        {
          value: '5',
        },
        {
          value: '6',
        }
      ],
    },
    {
      value: '7',
    }
  ],
}
```

