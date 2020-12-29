// export class HashSet extends Set {
//   contains = this.has;
//   remove = this.delete;
// }

export class HashSet_ {
  map = {};
  contains = k => Boolean(this.map[k]);
  remove = k => delete this.map[k];
  add = k => (this.map[k] = true);
}
