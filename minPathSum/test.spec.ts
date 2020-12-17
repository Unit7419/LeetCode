import { minPath as minPathJw } from './sln.dp';

test('Min path sum', () => {
  expect(
    minPathJw([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ])
  ).toBe(8);
});
