// Unit test
import { pow as powEy } from './solution.ey'
import { powJZ } from './solution.jz'

test('pow(10,10) tobe 10^10', () => {
  expect(powEy(10, 10)).toBe(10000000000)
  expect(powEy(10, -2)).toBe(0.01)
  expect(powEy(-2, 10)).toBe(1024)
  expect(powEy(0, 0)).toBe(1)
  expect(powEy(1, 0)).toBe(1)
})

test('pow(10,10) tobe 10^10', () => {
  expect(powJZ(10, 10)).toBe(10000000000)
  expect(powJZ(10, -2)).toBe(0.01)
  expect(powJZ(-2, 10)).toBe(1024)
  expect(powJZ(0, 0)).toBe(1)
  expect(powJZ(1, 0)).toBe(1)
})
