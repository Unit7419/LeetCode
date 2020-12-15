/**
 * 单元测试
 */

// import { exist } from './index';

import { exist as existJw } from './sln.jw';

// test('if path exist', () => {
//   expect(
//     exist(
//       [
//         ['A', 'B', 'C', 'E'],
//         ['S', 'F', 'C', 'S'],
//         ['A', 'D', 'E', 'E'],
//       ],
//       'ABCCED'
//     )
//   ).toBe(true);
//   expect(
//     exist(
//       [
//         ['a', 'b'],
//         ['c', 'd'],
//       ],
//       'abcd'
//     )
//   ).toBe(false);
// });

test('if path exist', () => {
  const cases = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ];

  expect(existJw(cases, '159')).toBe(true);
  expect(existJw(cases, '1234')).toBe(true);
  expect(existJw(cases, '15123459')).toBe(false);
  expect(existJw(cases, '123654789')).toBe(true);
  expect(existJw(cases, '111')).toBe(false);
  expect(existJw(cases, '7896')).toBe(true);
});
