// 测试案例
import { restoreEy } from './index';
const trans = arr => arr.sort().join('-');

test('ip', () => {
  expect(trans(restoreEy('101023'))).toBe(
    trans(['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3'])
  );

  expect(trans(restoreEy('25525511135'))).toBe(
    trans(['255.255.11.135', '255.255.111.35'])
  );

  expect(trans(restoreEy('0000'))).toBe(trans(['0.0.0.0']));

  expect(trans(restoreEy('010010'))).toBe(trans(['0.10.0.10', '0.100.1.0']));
});
