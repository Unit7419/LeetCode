import { longestContinuousCommonString as longestContinuousCommonStringJw } from '.';
<<<<<<< HEAD
import {longestContinuousCommonStringXq} from './solution.xq'
=======
import { LongestContinuousCommonStringEy } from './solution.ey'
import { longestContinuousCommonStringJZ } from './soultion.jz'
import { longestContinuousCommonStringXq } from './solution.xq';
>>>>>>> 047b5fe85f59fa48626aa452e00ff5f1eaa8e852

test('Longest continuous common string.', () => {
  expect(longestContinuousCommonStringJw('12345078', '345678')).toBe('345');
  expect(longestContinuousCommonStringJw('0034007800', '345678')).toBe('34');
  expect(longestContinuousCommonStringJw('12345', '567890')).toBe('5');
  expect(longestContinuousCommonStringJw('12345', '67890')).toBe(-1);
});

<<<<<<< HEAD

test('Longest continuous common string xq.', () => {
=======
test('Longest continuous common string xq', () => {
>>>>>>> 047b5fe85f59fa48626aa452e00ff5f1eaa8e852
  expect(longestContinuousCommonStringXq('12345078', '345678')).toBe('345');
  expect(longestContinuousCommonStringXq('0034007800', '345678')).toBe('34');
  expect(longestContinuousCommonStringXq('12345', '567890')).toBe('5');
  expect(longestContinuousCommonStringXq('12345', '67890')).toBe(-1);
<<<<<<< HEAD
});
=======
});

test('Longest continuous common string1', () => {
  expect(LongestContinuousCommonStringEy('12345078', '345678')).toBe('345');
  expect(LongestContinuousCommonStringEy('0034007800', '345678')).toBe('34');
  expect(LongestContinuousCommonStringEy('12345', '567890')).toBe('5');
  expect(LongestContinuousCommonStringEy('12345', '67890')).toBe(-1);
});

test('Longest continuous common string2', () => {
  expect(longestContinuousCommonStringJZ('12345078', '345678')).toBe('345');
  expect(longestContinuousCommonStringJZ('0034007800', '345678')).toBe('34');
  expect(longestContinuousCommonStringJZ('12345', '567890')).toBe('5');
  expect(longestContinuousCommonStringJZ('12345', '67890')).toBe(-1);
});
>>>>>>> 047b5fe85f59fa48626aa452e00ff5f1eaa8e852
