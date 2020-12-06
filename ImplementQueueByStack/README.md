## 用两个栈实现一个队列

> Authored by [summerUniq](https://github.com/summerUniq)

> Original source [Leet code](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead  操作返回 -1 )

## Example

示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]

---

示例 1： 输入： ["CQueue","appendTail","deleteHead","deleteHead"] 这里是要执行的方法，从左到右执行

[[],[3],[],[]]对应上面的方法，是上面方法的参数。CQueue 和 deleteHead 方法不需要指定数字，只有添加才需要指定数字

1.创建队列，返回值为 null

2.将 3 压入栈，返回值为 null

3.将栈底的元素删除，也就是消息队列中先进来的元素，所以是 deleteHead，返回该元素的数值，所以为 3

4.继续删除栈底的元素，但是没有元素了，所以返回-1

所以就有了下面的输出 输出：[null,null,3,-1]

示例 2： 输入： ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]

[[],[],[5],[2],[],[]]

1.创建队列，返回值为 null

2.删除栈底的元素，但是没有元素，所以返回-1

3.把 5 压入栈，返回 null

4.把 2 压入栈，返回 null

5.删除栈底的一个元素，也就是消息队列中先进来的元素，所以是 deleteHead，就是最先进来的 5，返回值为 5，

6.删除栈底的一个元素，就是后进来的 2，返回值为 2，

所以就有了下面的输出

输出：[null,-1,null,null,5,2]

提示：

1 <= values <= 10000
最多会对  appendTail、deleteHead 进行  10000  次调用

**[Answer](./index.ts)**

**[Test cases](./test.spec.ts)**
