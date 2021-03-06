import { telNum as telNumJw } from './sln.jw';
import { letterCombinationsEy } from './solution.ey';
import { telNum as telNumJw } from './sln.jw'

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

test('电话号码字母组合', () => {
  expect(letterCombinationsEy('23')).toStrictEqual([
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
test('电话号码字母组合', () => {
  expect(letterCombinationsEy('234')).toStrictEqual([
    'adg',
    'adh',
    'adi',
    'aeg',
    'aeh',
    'aei',
    'afg',
    'afh',
    'afi',
    'bdg',
    'bdh',
    'bdi',
    'beg',
    'beh',
    'bei',
    'bfg',
    'bfh',
    'bfi',
    'cdg',
    'cdh',
    'cdi',
    'ceg',
    'ceh',
    'cei',
    'cfg',
    'cfh',
    'cfi',
  ]);
});

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
