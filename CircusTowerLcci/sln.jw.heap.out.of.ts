import { longestCommonString } from '../LongestCommonString/solution.jw';

const map = (arr, k) =>
  arr
    .slice(0)
    .sort((a, b) => a[k] - b[k])
    .map(_ => _.id);

export const bestSeqAtIndexJw = (
  h,
  w,
  merge = h.map((v, i) => ({ h: v, w: w[i], id: i }))
) => longestCommonString(map(merge, 'h'), map(merge, 'w'));

bestSeqAtIndexJw([65, 70, 56, 75, 60, 68], [100, 150, 90, 190, 95, 110]);
// => 6

// length 1w 时 heap out of memory
