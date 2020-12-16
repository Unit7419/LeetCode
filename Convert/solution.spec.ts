import { convert as convertJw } from './sln.jw';

test('convert Z', () => {
  expect(convertJw('LEETCODEISHIRING', 3)).toBe('LCIRETOESIIGEDHN')
  expect(convertJw('LEETCODEISHIRING', 4)).toBe('LDREOEIIECIHNTSG')
})