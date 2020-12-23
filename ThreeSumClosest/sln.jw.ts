export const threeSumClosest = (
  list,
  t,
  data = list.sort((a, b) => a - b),
  l = data.length - 1,
  temp = data[0] + data[1] + data[2]
) => {
  const loop = (s, e, i) => {
    if (s >= e) return;
    const sum = data[s] + data[e] + data[i];
    temp = Math.abs(t - sum) < Math.abs(t - temp) ? sum : temp;
    return sum === t ? t : sum > t ? loop(s, e - 1, i) : loop(s + 1, e, i);
  };

  for (let i = 0; i < data.length; i++) {
    if (loop(i + 1, l, i) === t) return t;
  }

  return temp;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
