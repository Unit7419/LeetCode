// s     原始字符串
// data  收集符合条件的返回值
// pos   每次递归截取的位置
// chars 截取的字符（最终拼接为满足条件的IP
// count 递归的次数（IP由四部分组成递归四次的时候就没必要再继续了
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
