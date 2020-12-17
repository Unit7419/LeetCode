// 

import {minPathSum as minPathSumXq} from './solution.xq'

test('min path sum xq', ()=> {
    expect(minPathSumXq([[1,3,1],[1,5,1],[4,2,1]])).toEqual(7)
    expect(minPathSumXq([[1,2,3],[4,5,6]])).toEqual(12)
})