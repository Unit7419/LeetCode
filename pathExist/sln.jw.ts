export const exist = (matrix, chars) => {
  const bool = (i, j) => matrix[i] && matrix[i][j];
  const g = _ => new RegExp(_.map(_ => `.*${_}{1}.*`).join(''));
  const equal = (a, b) => g([...b]).test(a) || g([...b].reverse()).test(a);

  const push = (data, item, i, j) => {
    if (bool(i, j) && !item.history.find(_ => _.i === i && _.j === j)) {
      const value = item.value + matrix[i][j];
      const history = [...item.history, { i, j }];

      data.push({ value, i, j, history });
    }
  };

  const loop = (
    collections = [
      { value: matrix[0][0], i: 0, j: 0, history: [{ i: 0, j: 0 }] },
    ],
    data = []
  ) => {
    collections.forEach(
      item =>
        [
          [item.i + 1, item.j],
          [item.i, item.j + 1],
          [item.i - 1, item.j],
          [item.i, item.j - 1],
        ].forEach(_ => push(data, item, ...(_ as [number, number])))
      // ].forEach(_ => push(data, item, ...(_ as [number, number])))
    );

    return collections.some(({ value }) => equal([...value], [...chars]))
      ? true
      : collections.every(({ i, j }) => !bool(i + 1, j) && !bool(i, j + 1))
      ? false
      : loop(data);
  };

  return loop();
};
