// 单元测试
import {numWays as numWaysXq} from './solution.xq'

test('numWays', ()=> {
    expect(numWaysXq(1)).toBe(1)
    expect(numWaysXq(0)).toBe(1)
    expect(numWaysXq(2)).toBe(2)
    expect(numWaysXq(3)).toBe(3)
    expect(numWaysXq(4)).toBe(5)
    expect(numWaysXq(5)).toBe(8)
    expect(numWaysXq(6)).toBe(13)
    expect(numWaysXq(7)).toBe(21)
})