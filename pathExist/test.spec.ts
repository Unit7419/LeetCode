/**
 * 单元测试
 */

import { exist } from './index';
import { pathExistEy2 } from './solution.ey';

test('if path exist', () => {
  expect(
    exist(
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
      ],
      'ABCCED'
    )
  ).toBe(true);
  expect(
    exist(
      [
        ['a', 'b'],
        ['c', 'd'],
      ],
      'abcd'
    )
  ).toBe(false);
});

test('if path exist1', () => {
  expect(
    pathExistEy2(
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
      ],
      'ABCCED'
    )
  ).toBe(true);
  expect(
    pathExistEy2(
      [
        ['a', 'b'],
        ['c', 'd'],
      ],
      'abcd'
    )
  ).toBe(false);
});
