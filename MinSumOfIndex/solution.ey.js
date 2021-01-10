/*
 * @Date: 2021-01-07 14:16:12
 * @LastEditors: elegantYu
 * @LastEditTime: 2021-01-07 16:33:50
 * @Description:
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
export const findRestaurant = (list1, list2) => {
  const map = Array.from(Array(list1.length + list2.length), () =>
    Array(0).fill([])
  );

  list1.forEach((v, i) => {
    if (list2.includes(v)) {
      const idx = list2.findIndex(val => val === v);
      console.log(v, idx + i);
      map[idx + i].push(v);
    }
  });

  return map.filter(v => v.length)[0];
};
