export class CQueue {
  stack: number[] = [];
  stack2: number[] = [];
  logs: (null | number)[] = [null];

  deleteHead = () => {
    this.stack2 = [...this.stack.reverse()];
    const r = this.stack2.pop() || -1;
    this.stack = [...this.stack2.reverse()];
    this.stack2 = [];
    this.logs.push(r);

    return r;
  };

  appendTail = (val: number) => {
    this.stack.push(val);
    this.logs.push(null);
  };
}

// npx ts-node ImplementQueueByStack/solution.jw.ts
