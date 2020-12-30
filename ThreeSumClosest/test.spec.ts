import { threeSumClosest as threeSumClosestJw } from './sln.jw';
import { threeSumClosestJZ } from './solution.jz';

test('threeSumClosest', () => {
  expect(threeSumClosestJw([-1, 2, 1, -4], 1)).toBe(2);
});

test('threeSumClosest1', () => {
  expect(threeSumClosestJZ([-1, 2, 1, -4], 1)).toBe(2);
});
