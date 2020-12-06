<h1>
  Optional Keys
  <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-red" alt="困难" />
</h1>

实现高级 util 类型`OptionalKeys<T>`，提取该类型将所有可选键合并为一个 Union type

Example

```ts
type Obj = {
  name: string;
  age?: number;
  gn?: string;
};

type Res = OptionalKeys<Obj>; // Expect to be age | gn
```

**[Answer](./index.ts)**
**[Test cases](./test.spec.ts)**
