import { letterCombinationsJZ } from './solution.jz.jz';

test('Tel num.', () => {
  expect(letterCombinationsJZ('23')).toStrictEqual([
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf',
  ]);
});
