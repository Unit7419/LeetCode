export class CQueue {
  stack: number[] = [];
  stack2: number[] = [];
  logs: (null | number)[] = [null];

  swap = (a, b) => {
    while (a.length) {
      b.push(a.pop());
    }
  };

  deleteHead = () => {
    if (this.stack.length) {
      this.swap(this.stack, this.stack2);
      this.logs.push(this.stack2.pop());
      this.swap(this.stack2, this.stack);
      return
    }
    this.logs.push(-1);
  };

  appendTail = (val: number) => {
    this.stack.push(val);
    this.logs.push(null);
  };
}

// npx ts-node ImplementQueueByStack/solution.jw.ts
