import { maxSubArrayJZ } from './solution.jz';
import {maxSubArray as maxSubArrayJw} from './sln.jw'

test('最大子序和', () => {
    expect(maxSubArrayJZ([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
});

test('maxSubArray',() => {
  expect(maxSubArrayJw([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})
