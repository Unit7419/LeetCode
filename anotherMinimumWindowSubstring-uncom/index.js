var containF = function (a, b, start) {
  var position = {
    start: start - 1,
    end: start - 1,
    next: start - 1
  };
  var startF = true;
  var nextF = true;
  for (var i = start; i < a.length; i++) {
    if (b === '') {
      break;
    }
    if (startF) {
      position.start++;
    }
    if (nextF) {
      position.next++;
    }
    position.end++;
    if (b.indexOf(a[i]) !== -1) {
      if (!startF) {
        nextF = false;
      }
      startF = false;
      var reg = new RegExp(a[i]);
      b = b.replace(reg, "");
    }
  }
  if (b !== '') {
    return false;
  } else {
    return position;
  }
}

var getPs = function (a, b) {
  var ps = [];
  var start = 0;
  var p = containF(a, b, start);
  while (p) {
    ps.push(p);
    start = p.next;
    p = containF(a, b, start);
  }
  return ps;
}


var getMin = function (arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
var getIndexs = function (arr) {
  var minIs = [];
  var min = getMin(arr);
  for (var i = 0; i < arr.length; ++i) {
    if (min === arr[i]) {
      minIs.push(i);
    }
  }
  return minIs;
}

function singleChar (char) {
  if (char.length === 1) {
    return char
  }
}

function compose (call, a, b) {
  let res
  if (call(b)) {
    res = ''
    a.includes(b) && (res = b)
  }
  return res
}

var getMinP = function (a, b) {
  const res = compose(singleChar, a, b)

  if (res !== undefined) {
    return res
  }


  var ps = getPs(a, b);
  var ls = [];
  var minps = [];
  for (var i = 0; i < ps.length; i++) {
    ls.push(ps[i].end - ps[i].start);
  }
  var minLs = getIndexs(ls);
  for (var j = 0; j < minLs.length; j++) {
    minps.push(ps[minLs[j]]);
  }
  return a.substring(minps[0].start, minps[0].end + 1);
}

var ps = getMinP('gyhtycabcfgsscnagscp', 'gtyc');
console.log(ps)