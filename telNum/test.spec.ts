import { telNum as telNumJw } from './sln.jw';

test('Tel num.', () => {
  expect(telNumJw('23')).toStrictEqual([
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
