import { convertEy } from './solution.ey';
import {convertXq} from './solution.xq';

test('convert Z', () => {
  expect(convertEy('LEETCODEISHIRING', 3)).toBe('LCIRETOESIIGEDHN');
  expect(convertEy('LEETCODEISHIRING', 4)).toBe('LDREOEIIECIHNTSG');
});

test('convert z', ()=> {
  expect(convertXq('LEETCODEISHIRING', 3)).toBe('LCIRETOESIIGEDHN');
  expect(convertXq('LEETCODEISHIRING', 4)).toBe('LDREOEIIECIHNTSG');
  expect(convertXq('LEETCODEISHIRING', 1)).toBe('LEETCODEISHIRING');
  expect(convertXq('L', 2)).toBe('L');
})
