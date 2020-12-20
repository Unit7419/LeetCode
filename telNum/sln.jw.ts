const mappings = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

export const telNum = (numbers, ...args) => {
  const [data = [], chars = '', deep] = args;

  if (!numbers) return deep ? data.push(chars) : [];

  [...mappings[numbers[0]]].forEach(char =>
    telNum(numbers.slice(1), data, `${chars}${char}`, true)
  );

  return data;
};
