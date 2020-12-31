//
export var bestSeqAtIndex = function (height, weight) {
  const sortWeight = height
    .map((v, i) => ({ v, i }))
    .sort((a, b) => a.v - b.v)
    .map(v => weight[v.i]);

  const dp = [1];

  for (let i = 0; i < sortWeight.length; i++) {
    let tempMax = 1;

    for (let j = 0; j < i; j++) {
      const curr = sortWeight[i];
      const next = sortWeight[j];

      if (next < curr) {
        tempMax = Math.max(dp[j] + 1, tempMax);
      }

      if (j === i - 1) {
        dp[i] = tempMax;
        tempMax = 1;
      }
    }
  }

  return Math.max(...dp);
};
