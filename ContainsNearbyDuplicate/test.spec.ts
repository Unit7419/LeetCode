import { containsNearbyDuplicateJZ } from './solution.jz'

test('存在重复元素', ()=> {
    expect(containsNearbyDuplicateJZ([1,0,1,1], 1)).toBe(true)
    expect(containsNearbyDuplicateJZ([1,2,3,1,2,3], 2)).toBe(false)
})
