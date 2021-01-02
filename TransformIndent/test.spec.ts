// Unit test

import { convertTreeEy } from './solution.ey';
import {transformIndent} from './solution.xq'

const s1 = `
1
  2
    3
4
  5
  6
7`

test('文本缩进转树结构', () => {
    expect(JSON.stringify(convertTreeEy(s1))).toBe(
      `{"value":"root","children":[{"value":"1","children":[{"value":"2","children":[{"value":"3"}]}]},{"value":"4","children":[{"value":"5"},{"value":"6"}]},{"value":"7"}]}`
    );
  });


var output = {
    value: 'root',
    children: [
      {
        value: '1',
        children: [
          {
            value: '2',
            children: [
              {
                value: '3',
              }
            ],
          }
        ],
      },
      {
        value: '4',
        children: [
          {
            value: '5',
          },
          {
            value: '6',
          }
        ],
      },
      {
        value: '7',
      }
    ],
  }

var input = `
1
  2
    3
4
  5
  6
7
`

test('transform indent', ()=> {
    expect(transformIndent(input)).toStrictEqual(output)
})
