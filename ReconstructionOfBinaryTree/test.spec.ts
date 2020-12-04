// 测试案例
import {buildTreeXq} from './index'

test('重建二叉树', () => {
    expect(buildTreeXq(
        [3,9,20,15,7], 
[9,3,15,20,7])).toBe([3,9,20,null,null,15,7]);
  });