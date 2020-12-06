import { longestCommonString as longestCommonStringJw } from './solution.jw';

test('最长公共子序列', () => {
  expect(longestCommonStringJw('1234567', '1357')).toBe(4);
  expect(longestCommonStringJw('abc', 'abc')).toBe(3);
  expect(longestCommonStringJw('123', '456')).toBe(0);
  expect(longestCommonStringJw('asd', 'dfg')).toBe(1);
});
