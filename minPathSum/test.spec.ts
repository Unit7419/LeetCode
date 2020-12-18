import { minPathSumEy } from './solution.ey';
import { minPathSum as minPathSumXq } from './solution.xq';
import { minPath as minPathJw } from './sln.dp';

test('最短路径', () => {
  expect(
    minPathSumEy([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ])
  ).toBe(7);
  expect(
    minPathSumEy([
      [1, 2, 3],
      [4, 5, 6],
    ])
  ).toEqual(12);
});

test('min path sum xq', () => {
  expect(
    minPathSumXq([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ])
  ).toEqual(7);
  expect(
    minPathSumXq([
      [1, 2, 3],
      [4, 5, 6],
    ])
  ).toEqual(12);
});

test('Min path sum', () => {
  expect(
    minPathJw([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ])
  ).toBe(8);
});
