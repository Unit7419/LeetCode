import { convertJZ } from './solution.jz'

test('Z 字形变换', () => {
  expect(convertJZ('LEETCODEISHIRING', 3)).toBe('LCIRETOESIIGEDHN');
  expect(convertJZ('LEETCODEISHIRING', 4)).toBe('LDREOEIIECIHNTSG');
  expect(convertJZ('LEETCODEISHIRING', 1)).toBe('LEETCODEISHIRING');
  expect(convertJZ('L', 321)).toBe('L');
  expect(convertJZ('LEET', 321)).toBe('LEET');
});
