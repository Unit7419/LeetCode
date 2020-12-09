// 单元测试
import {numWays as numWaysXq} from './solution.xq'
import { numWaysEy } from './solution.ey'
import { numWaysJZ } from './solution.jz'

test('numWays', ()=> {
    expect(numWaysXq(1)).toBe(1)
    expect(numWaysXq(0)).toBe(1)
    expect(numWaysXq(2)).toBe(2)
    expect(numWaysXq(3)).toBe(3)
    expect(numWaysXq(4)).toBe(5)
    expect(numWaysXq(5)).toBe(8)
    expect(numWaysXq(6)).toBe(13)
    expect(numWaysXq(7)).toBe(21)
    expect(numWaysXq(78)).toBe(923369890)
    expect(numWaysXq(100)).toBe(782204094)
})

test('numWays1', ()=> {
    expect(numWaysEy(1)).toBe(1)
    expect(numWaysEy(0)).toBe(1)
    expect(numWaysEy(2)).toBe(2)
    expect(numWaysEy(3)).toBe(3)
    expect(numWaysEy(4)).toBe(5)
    expect(numWaysEy(5)).toBe(8)
    expect(numWaysEy(6)).toBe(13)
    expect(numWaysEy(7)).toBe(21)
    expect(numWaysEy(78)).toBe(923369890)
    expect(numWaysEy(100)).toBe(782204094)
})

test('numWays2', ()=> {
    expect(numWaysJZ(1)).toBe(1)
    expect(numWaysJZ(0)).toBe(1)
    expect(numWaysJZ(2)).toBe(2)
    expect(numWaysJZ(3)).toBe(3)
    expect(numWaysJZ(4)).toBe(5)
    expect(numWaysJZ(5)).toBe(8)
    expect(numWaysJZ(6)).toBe(13)
    expect(numWaysJZ(7)).toBe(21)
    expect(numWaysJZ(78)).toBe(923369890)
    expect(numWaysJZ(100)).toBe(782204094)
})
