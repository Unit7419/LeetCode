// Unit test














































import {transformIndent} from './solution.xq'
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