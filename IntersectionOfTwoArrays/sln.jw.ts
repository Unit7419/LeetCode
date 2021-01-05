export const intersection = (a, b) =>
  a.reduce(
    (data, v) => (b.includes(v) && !data.includes(v) ? [...data, v] : data),
    []
  );
