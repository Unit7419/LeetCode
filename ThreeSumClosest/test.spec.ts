import { threeSumClosest as threeSumClosestJw } from './sln.jw';

test('threeSumClosest', () => {
  expect(threeSumClosestJw([-1, 2, 1, -4], 1)).toBe(2);
});
