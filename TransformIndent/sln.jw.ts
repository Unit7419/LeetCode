const // 标记空格数
  getBlankCount = string => {
    const execData = string.match(/^ */);
    return execData ? execData[0].length : 0;
  };

const // 格式化
  formatTokens = string =>
    string
      .split(/\n+/)
      .filter(Boolean)
      .reduce(
        (datas, value, id) => [
          ...datas,
          {
            id,
            value: value.trimLeft(),
            indent: getBlankCount(value),
            children: [],
          },
        ],
        []
      )
      .reverse();

const // 倒序复原深度优先遍历数据结构
  transformIndent = reverseArray => {
    const loopArray = reverseArray.slice(0);
    let pointer = 0;

    while (pointer < loopArray.length) {
      const pointerData = loopArray[pointer];
      let findSubordinates, current;
      let k = pointer;

      for (; k < loopArray.length; k++) {
        current = loopArray[k];
        if (current.indent < pointerData.indent) {
          reverseArray.splice(
            reverseArray.findIndex(({ id }) => id === pointerData.id),
            1
          );
          if (current.children) {
            current.children.unshift(pointerData);
          } else {
            current.children = [pointerData];
          }
          findSubordinates = true;
          break;
        }
      }

      if (findSubordinates) {
        transformIndent(reverseArray);
        break;
      }

      pointer++;
    }

    return {
      value: 'root',
      children: reverseArray.reverse(),
    };
  };

const str = `
1
  2
    3
4
  5
  6
7`;

console.log(JSON.stringify(transformIndent(formatTokens(str))));
// {
//   value: 'root',
//   children: [
//     {
//       id: 0,
//       value: '1',
//       indent: 0,
//       children: [
//         {
//           id: 1,
//           value: '2',
//           indent: 2,
//           children: [{ id: 2, value: '3', indent: 4, children: [] }],
//         },
//       ],
//     },
//     {
//       id: 3,
//       value: '4',
//       indent: 0,
//       children: [
//         { id: 4, value: '5', indent: 2, children: [] },
//         { id: 5, value: '6', indent: 2, children: [] },
//       ],
//     },
//     { id: 6, value: '7', indent: 0, children: [] },
//   ],
// };
