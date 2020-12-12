/**
 * 单元测试
 */

 import {exist} from "./index"

 test('if path exist', ()=> {
     expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toBe(true)
     expect(exist([["a","b"],["c","d"]], "abcd")).toBe(false)
 })