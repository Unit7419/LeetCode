import { bestSeqAtIndexJw } from './sln.jw.heap.out.of';

test('', () => {
  expect(
    bestSeqAtIndexJw([65, 70, 56, 75, 60, 68], [100, 150, 90, 190, 95, 110])
  ).toBe(6);
});
