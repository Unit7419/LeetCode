export const bestSeqAtIndex = (
  h,
  w,
  dp = [1],
  wh = h
    .map((v, i) => ({ h: v, w: w[i], s: 1 }))
    .sort(({ w: w_, h: _h }, { w, h }) => w * h - w_ * _h)
) => {
  for (let i = wh.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (wh[j].w > wh[i].w && wh[j].h > wh[i].h && wh[j].s <= wh[i].s)
        dp.push(++wh[j].s);
    }
  }

  return Math.max(...dp);
};
// const bestSeqAtIndexJw2 = (h, w) => {
//   const ws = h
//     .map((v, i) => ({ h: v, w: w[i] }))
//     .slice(0)
//     .sort((a, b) => a.h - b.h)
//     .map(_ => _.w);

//   if (!ws.length) return 0;

//   const dp = [0];
//   for (const [index, num] of ws.entries()) {
//     const current = [0];
//     for (let k = 0; k <= index; k++) {
//       if (ws[k] < num) {
//         current.push(dp[k]);
//       }
//     }
//     dp[index] = Math.max(...current) + 1;
//   }

//   return Math.max(...dp);
// };
