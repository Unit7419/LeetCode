import { numJewelsInStonesJZ } from './solution.jz'


test('宝石与石头', () => {
  expect(numJewelsInStonesJZ('aA', 'aAAbbbb')).toBe(3);
});
