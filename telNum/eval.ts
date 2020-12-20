// yarn node telNum/eval.ts
// npm run node telNum/eval.ts

var global = {}
var varsList = []
var data = []

function push() {
  return varsList.reduce((_, [vars, idx]) => {
    return `${_ ? _ + '+' : _}global.${vars}[${idx}]`
  }, '')
}


function ex (...args) {
  var [exp, end] = args

  if (end) {
    return exp.replace('$$', `data.push(${push()})`)
  }

  return exp
}

function g(list, varsIdx, ...args) {
  return `
    for (let ${varsIdx} = 0; ${varsIdx} < global.${list}.length; ${varsIdx}++) {
      ${ex(...args)}
      ${args[2] ? '$$' : ''}
    }
  
  `
}

var mappings = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

function get(input) {
  return [...input].reduce((_, n) => [..._, [...mappings[n]]], [])
}

function forEach(input, fors = '') {
  var x = get(input)

  x.forEach((_, idx) => {
    var vars = `list${idx}`
    var varsIdx = `l${idx}`
  
    varsList.push([vars, varsIdx])
    global[vars] = _
    fors = g(vars, varsIdx, fors, idx === x.length - 1, idx === 0)
  })

  return fors
}

function run (input) {
  eval(forEach(input))

  return data
}

console.log(run('23'))
// output:
// [
//   'ad', 'bd', 'cd',
//   'ae', 'be', 'ce',
//   'af', 'bf', 'cf'
// ]
