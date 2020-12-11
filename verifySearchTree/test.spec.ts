import { generateThree } from './generateThree';
import { isValidBSTJZ } from './solution.jz'
import {verify as verifyJw} from './justwink.jw'
import { isValidBSTEY } from './solution.ey'
import {isValidBST} from './solution.xq'

test('验证二叉搜索树', () => {
  expect(isValidBSTJZ(generateThree([5,1,4,null,null,3,6]))).toBe(false);
  expect(isValidBSTJZ(generateThree([2,1,3]))).toBe(true);
  expect(isValidBSTJZ(generateThree([6,2,8,0,4,7,9,null,null,3,5]))).toBe(true);
});

test('验证二叉搜索树', () => {
  expect(verifyJw(generateThree([5,1,4,null,null,3,6]))).toBe(false);
  expect(verifyJw(generateThree([2,1,3]))).toBe(true);
  expect(verifyJw(generateThree([6,2,8,0,4,7,9,null,null,3,5]))).toBe(true);
});

test('验证二叉搜索树1', () => {
  expect(isValidBSTEY(generateThree([5,1,4,null,null,3,6]))).toBe(false);
  expect(isValidBSTEY(generateThree([2,1,3]))).toBe(true);
  expect(isValidBSTEY(generateThree([6,2,8,0,4,7,9,null,null,3,5]))).toBe(true);
});

test('验证二叉搜索树2', () => {
  expect(isValidBST(generateThree([5,1,4,null,null,3,6]))).toBe(false);
  expect(isValidBST(generateThree([2,1,3]))).toBe(true);
  expect(isValidBST(generateThree([6,2,8,0,4,7,9,null,null,3,5]))).toBe(true);
});
