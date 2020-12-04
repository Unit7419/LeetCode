<<<<<<< HEAD
// 测试案例
import { buildTreeXq } from './index';
import { buildTree } from './solution.jw';
import { buildTreeEy } from './solution.ey';

function flatTree_(obj = {} as any, arr = []) {
  function push(value) {
    this.push(value || null);
  }

  if (obj.val) {
    push.call(arr, obj.val);

    if (obj.left) {
      push.call(arr, obj.left.val);
    }

    if (obj.right) {
      push.call(arr, obj.right.val);
    }

    if (obj.left && !obj.left.left) {
      push.call(arr);
      push.call(arr);
    }

    if (obj.right && !obj.right.right) {
      push.call(arr);
      push.call(arr);
    }

    if (obj.left && obj.left.left) {
      flatTree_(obj.left.left, arr);
      flatTree_(obj.left.right, arr);
    }

    if (obj.right && obj.right.right) {
      flatTree_(obj.right.left, arr);
      flatTree_(obj.right.right, arr);
    }
  }

  return arr;
}

test('重建二叉树', () => {
  expect(
    JSON.stringify(flatTree_(buildTreeXq([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])))
  ).toBe(JSON.stringify([3, 9, 20, null, null, 15, 7]));
});

test('重建二叉树-2', () => {
  expect(
    JSON.stringify(flatTree_(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])))
  ).toBe(JSON.stringify([3, 9, 20, null, null, 15, 7]));
});

test('重建二叉树-3', () => {
  expect(
    JSON.stringify(flatTree_(buildTreeEy([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])))
  ).toBe(JSON.stringify([3, 9, 20, null, null, 15, 7]));
});
=======
// 测试案例
>>>>>>> 重建二叉树文件目录
