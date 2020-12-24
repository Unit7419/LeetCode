import { bestSeqAtIndexJw } from './sln.jw.heap.out.of';
import { bestSeqAtIndex as bestSeqAtIndexJw2 } from './sln.jw';

test('', () => {
  expect(
    bestSeqAtIndexJw([65, 70, 56, 75, 60, 68], [100, 150, 90, 190, 95, 110])
  ).toBe(6);

  expect(bestSeqAtIndexJw2(
    [5401, 9628, 3367, 6600, 6983, 7853, 5715, 2654, 4453, 8619],
    [3614, 1553, 2731, 7894, 8689, 182, 7632, 4465, 8932, 4304]
  )).toBe(5)
});

