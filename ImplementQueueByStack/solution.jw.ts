// 为什么会需要两个栈...

export class CQueue {
  stack: number[] = [];
  logs: (null | number)[] = [null];

  deleteHead = () => {
    const r = this.stack.shift() || -1;
    this.logs.push(r);

    return r;
  };

  appendTail = (val: number) => {
    this.stack.push(val);
    this.logs.push(null);
  };
}

// npx ts-node ImplementQueueByStack/solution.jw.ts
