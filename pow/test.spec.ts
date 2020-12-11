// Unit test
import { pow as powEy } from './solution.ey'
import { powJZ } from './solution.jz'
import {powXq} from './solution.xq'
import { pow as powJw } from './solution.jw';

test('pow(10,10) tobe 10^10', () => {
  const cases: [number, number][] = [
    [10, 10],
    [10, -2],
    [-2, 10],
    [0, 0],
  ];

  cases.forEach(_ => expect(powJw(..._)).toBe(Math.pow(..._)));
});

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

test('pow(10,10) tobe 10^10', () => {
    expect(powXq(10, 10)).toBe(10000000000)
    expect(powXq(10, -2)).toBe(0.01)
    expect(powXq(-2, 10)).toBe(1024)
    expect(powXq(0, 0)).toBe(1)
    expect(powXq(1, 0)).toBe(1)
})

