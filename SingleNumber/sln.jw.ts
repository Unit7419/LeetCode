export const findSingle = (
  arr,
  obj = arr.reduce((_, k) => ({ ..._, [k]: _.hasOwnProperty(k) }), {})
) => arr.find(k => !obj[k]);
