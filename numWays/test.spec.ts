// 单元测试
import { numWays as numWaysJw } from './solution.jw';

test('f(n) = f(n-1) + f(n-2)', () => {
  expect(numWaysJw(7)).toBe(21);
  expect(numWaysJw(17)).toBe(2584);
  expect(numWaysJw(27)).toBe(317811);
  expect(numWaysJw(45)).toBe(836311896);
  expect(numWaysJw(46)).toBe(971215059);
  expect(numWaysJw(77)).toBe(261180706);
  expect(numWaysJw(78)).toBe(923369890);
});
