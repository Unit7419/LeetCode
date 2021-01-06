export const fourSum = (arr, target, count = 4, idx = 0, temp = [], data = []) => {
  if (arr.length < 4) return [];
  if (!count && data.length === 4) return temp.push(data.sort((a, b) => a - b));
  if (arr.length - idx < 4 - data.length) return;

  for (let i = idx; i < arr.length; i++) {
    fourSum(arr, target, count - 1, i + 1, temp, [...data, arr[i]]);
  }

  return temp.reduce(
    (record, list) =>
      !record.keys.includes(list.join('.')) &&
      list.reduce((sum, num) => (sum += num), 0) === target
        ? {
            list: [...record.list, list],
            keys: [...record.keys, list.join('.')],
          }
        : record,
    { list: [], keys: [] }
  ).list;
};

// console.log(fourSum([1, 1, 2, 2, 2, 3, 4, 6], 10));
// [ [ 1, 1, 2, 6 ], [ 1, 2, 3, 4 ], [ 2, 2, 2, 4 ] ]
