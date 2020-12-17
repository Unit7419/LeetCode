const minPath = matrix => {
  const bool = (i, j) => i < matrix.length && j < matrix[0].length;
  const push = (data, item, i, j) =>
    bool(i, j) && data.push({ value: item.value + matrix[i][j], i, j });
  const loop = (
    collections = [{ value: matrix[0][0], i: 0, j: 0 }],
    data = []
  ) => {
    collections.forEach(item =>
      [
        [item.i + 1, item.j],
        [item.i, item.j + 1],
      ].forEach(_ => push(data, item, ...(_ as [number, number])))
    );

    return collections.every(
      ({ i, j }) => i === matrix.length - 1 && j === matrix[0].length - 1
    )
      ? collections
      : loop(data);
  };

  return loop().sort(({ value: _ }, { value: __ }) => _ - __)[0].value;
};

// 5
// console.log(minPath([
//   [1, 2, 3],
//   [1, 4, 4],
//   [1, 1, 1],
// ]))

// GC Error heap out of memory
// console.log(
//   minPath([
//     [7, 1, 3, 5, 8, 9, 9, 2, 1, 9, 0, 8, 3, 1, 6, 6, 9, 5],
//     [9, 5, 9, 4, 0, 4, 8, 8, 9, 5, 7, 3, 6, 6, 6, 9, 1, 6],
//     [8, 2, 9, 1, 3, 1, 9, 7, 2, 5, 3, 1, 2, 4, 8, 2, 8, 8],
//     [6, 7, 9, 8, 4, 8, 3, 0, 4, 0, 9, 6, 6, 0, 0, 5, 1, 4],
//     [7, 1, 3, 1, 8, 8, 3, 1, 2, 1, 5, 0, 2, 1, 9, 1, 1, 4],
//     [9, 5, 4, 3, 5, 6, 1, 3, 6, 4, 9, 7, 0, 8, 0, 3, 9, 9],
//     [1, 4, 2, 5, 8, 7, 7, 0, 0, 7, 1, 2, 1, 2, 7, 7, 7, 4],
//     [3, 9, 7, 9, 5, 8, 9, 5, 6, 9, 8, 8, 0, 1, 4, 2, 8, 2],
//     [1, 5, 2, 2, 2, 5, 6, 3, 9, 3, 1, 7, 9, 6, 8, 6, 8, 3],
//     [5, 7, 8, 3, 8, 8, 3, 9, 9, 8, 1, 9, 2, 5, 4, 7, 7, 7],
//     [2, 3, 2, 4, 8, 5, 1, 7, 2, 9, 5, 2, 4, 2, 9, 2, 8, 7],
//     [0, 1, 6, 1, 1, 0, 0, 6, 5, 4, 3, 4, 3, 7, 9, 6, 1, 9],
//   ])
// );
