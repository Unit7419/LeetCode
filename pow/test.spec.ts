// Unit test
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
