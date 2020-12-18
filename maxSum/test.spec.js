import {maxSubArray as maxSubArrayJw} from './sln.jw'

test('maxSubArray',() => {
  expect(maxSubArrayJw([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})