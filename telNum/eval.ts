// yarn node telNum/eval.ts
// npm run node telNum/eval.ts

var global = {};
var varsList = [];
var data = [];
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

function push() {
  return varsList.reduce((_, [vars, idx]) => {
    return `${_ ? _ + '+' : _}global.${vars}[${idx}]`;
  }, '');
}

function ex(...args) {
  var [exp, end] = args;

  return end ? exp.replace('$$', `data.push(${push()})`) : exp;
}

function g(list, varsIdx, ...args) {
  return `
    for (let ${varsIdx} = 0; ${varsIdx} < global.${list}.length; ${varsIdx}++) {
      ${ex(...args)}
      ${args[2] ? '$$' : ''}
    }
  `;
}

function get(input) {
  return [...input].reduce((_, n) => [..._, [...mappings[n]]], []);
}

function forEach(input, fors = '') {
  var x = get(input);

  x.forEach((_, idx) => {
    var vars = `list${idx}`; // list0 list1...
    var varsIdx = `l${idx}`;  // l0, l1...

    varsList.push([vars, varsIdx]); //  [['list0', 'l0'], ['list1', 'l1']]
    
    global[vars] = _; // {'list0': "a", 'list1': "b"}
    fors = g(vars, varsIdx, fors, idx === x.length - 1, idx === 0);
  });

  return fors;
}

function run(input) {
  eval(forEach(input));

  return data;
}

console.log(run('23'));
// output:
// [
//   'ad', 'bd', 'cd',
//   'ae', 'be', 'ce',
//   'af', 'bf', 'cf'
// ]
