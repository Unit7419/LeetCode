import { threeSumClosestJZ } from './solution.jz';

test('ThreeSumClosest', () => {
  expect(threeSumClosestJZ([-1,0,1,1,55], 3)).toStrictEqual(2);
  expect(threeSumClosestJZ([-1,2,1,-4], 1)).toStrictEqual(2);
  expect(threeSumClosestJZ([1,2,4,8,16,32,64,128],82)).toStrictEqual(82);
});
