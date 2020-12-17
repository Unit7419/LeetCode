//
import { minPathSumEy } from './solution.ey';

test('最短路径', () => {
  expect(
    minPathSumEy([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ])
  ).toBe(7);
});
