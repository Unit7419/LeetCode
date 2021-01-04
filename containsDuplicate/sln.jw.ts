export const containsDuplicate = (arr, set = new Set()) =>
  arr.some(_ => set.has(_) || !set.add(_));
