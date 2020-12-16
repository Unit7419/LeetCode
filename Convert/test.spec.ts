import { convertEy } from './solution.ey';

test('convert Z', () => {
  expect(convertEy('LEETCODEISHIRING', 3)).toBe('LCIRETOESIIGEDHN');
  expect(convertEy('LEETCODEISHIRING', 4)).toBe('LDREOEIIECIHNTSG');
});
