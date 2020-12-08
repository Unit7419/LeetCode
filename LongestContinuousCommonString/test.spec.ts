import { longestContinuousCommonString as longestContinuousCommonStringJw } from '.';

test('Longest continuous common string.', () => {
  expect(longestContinuousCommonStringJw('12345078', '345678')).toBe('345');
  expect(longestContinuousCommonStringJw('0034007800', '345678')).toBe('34');
  expect(longestContinuousCommonStringJw('12345', '567890')).toBe('5');
  expect(longestContinuousCommonStringJw('12345', '67890')).toBe(-1);
});
