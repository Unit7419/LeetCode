// Unit test

import {powXq} from './solution.xq'

test('pow(10,10) tobe 10^10', () => {
    expect(powXq(10, 10)).toBe(10000000000)
    expect(powXq(10, -2)).toBe(0.01)
    expect(powXq(-2, 10)).toBe(1024)
})