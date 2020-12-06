import { CQueue as CQueueJw } from './solution.jw';

test('两个栈实现队列', () => {
  const queue = new CQueueJw();

  queue.appendTail(3);
  queue.appendTail(4);
  queue.deleteHead();
  queue.deleteHead();
  queue.deleteHead();

  expect(JSON.stringify(queue.logs)).toBe(
    JSON.stringify([null, null, null, 3, 4, -1])
  );
});
