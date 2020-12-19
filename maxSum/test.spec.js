import {maxSubArray as maxSubArrayJw} from './sln.jw'
import { maxSubArrayEy } from './solution.ey'

test('maxSubArray',() => {
  expect(maxSubArrayJw([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})

test('maxSubArray1',() => {
  expect(maxSubArrayEy([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})