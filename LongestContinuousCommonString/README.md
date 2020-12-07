## 最长连续公共子序列

> Authored by [justwink](https://github.com/justwink)

给定两个字符串，返回两个字符串最长的连续公共子序列的长度
Example:
```ts
declare function LongestContinuousCommonString(s1: string, s2: string): number

LongestContinuousCommonString('12345078', '345678')   // Expect to be 3 -> 345
LongestContinuousCommonString('0034007800', '345678') // Expect to be 2 -> 34 | 78
LongestContinuousCommonString('12345', '567890')      // Expect to be 1 -> 5
LongestContinuousCommonString('12345', '67890')       // Expect to be 0 -> null
```

**[Answer](./index.ts)**

**[Test cases](./test.spec.ts)**
