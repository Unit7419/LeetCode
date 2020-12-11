/*
 * @Date: 2020-12-11 19:30:40
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-11 19:34:47
 * @Description:
 */

export const pow = (base, index, time = Math.abs(index), origin = base) => {
  if (!base && !index) return 1
  if (!base) return 0
  if (index < -1 && time === 1) return 1 / base;
  if (index === 0 || time === 1 || time === 0) return base;

  const absTime = Math.abs(time);
  const next = base * origin;

  return pow(next, index, absTime - 1, origin);
};
