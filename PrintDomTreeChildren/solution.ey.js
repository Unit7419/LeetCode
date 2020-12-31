/*
 * @Date: 2020-12-23 19:10:53
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-23 21:35:57
 * @Description:
 */

const dfs = (root = document.body) => {
  const subs = Array.from(root.children);
  if (!subs.length) return;

  subs.forEach(s => {
    console.log(s);
    dfs(s);
  });
};

const bfs = (root = document.body) => {
  const list = [root];

  const foreach = () => {
    if (!list.length) return;

    list.map(v => {
      console.log(v);
      list.push(...Array.from(v.children));
      list.shift();
    });
    return foreach();
  };

  foreach();
};
