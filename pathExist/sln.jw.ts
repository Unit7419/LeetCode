export const exist = (matrix, chars) => {
  const bool = (i, j) => matrix[i] && matrix[i][j];
  const equal = (a, b) => {
    const temp = [];
    const chars = b.join('');

    for (let idx = 0; idx < a.length; idx++) {
      if (a[idx] === b[0]) {
        temp.push(b.shift());

        if (chars === temp.join('')) return true;
      }
    }
  };

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
    collections.forEach(item => {
      push(data, item, item.i + 1, item.j);
      push(data, item, item.i, item.j + 1);
      push(data, item, item.i - 1, item.j);
      push(data, item, item.i, item.j - 1);
    });

    return collections.some(({ value }) => equal([...value], [...chars]))
      ? true
      : collections.every(({ i, j }) => !bool(i + 1, j) && !bool(i, j + 1))
      ? false
      : loop(data);
  };

  return loop();
};
