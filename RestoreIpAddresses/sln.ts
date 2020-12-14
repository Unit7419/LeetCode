export const sln = (s, data = [], pos = 0, chars = '', count = 0) => {
  const last = pos >= s.length || count === 4;
  const match =
    chars.length - 4 === s.length &&
    !/\.0\d+/g.test(chars) &&
    !data.includes(chars.slice(1));

  if (last && match) return data.push(chars.slice(1));
  if (last) return;

  for (let idx = 1; idx <= 3; idx++) {
    if (+s.substr(pos, idx) <= 255) {
      sln(s, data, pos + idx, `${chars}.${s.substr(pos, idx)}`, count + 1);
    }
  }

  return data;
};
