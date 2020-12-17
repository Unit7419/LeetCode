import { minPathSumJZ } from './solution.jz'

test('minPathSumJZ', ()=> {
    expect(minPathSumJZ([[1,2,3],[4,5,6]])).toBe(12)
    expect(minPathSumJZ([[1,3,1],[1,5,1],[4,2,1]])).toBe(7)
})
