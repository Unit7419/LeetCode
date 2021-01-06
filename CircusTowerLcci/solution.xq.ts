/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
export const bestSeqAtIndex = function(height, weight) {
    // 先将每个人的身高体重维护好
    // 按照身高递增的方式排列
    // 相同身高的按照体重递减的方式排列
    let people = []
    height.map((v, i) => {
        people.push({h: v, w: weight[i]})
    })
    people.sort((a, b)=> {
        if(a.h === b.h) {
            return b.w - a.w
        }
        return a.h - b.h
    })
    // 获取体重升序排列的最大非连续子序列长度
    let dl = []
    let end = people[0].w
    dl[0] = end
    let start = dl[0]
    for(var i = 1; i< people.length; i++){
        let curW = people[i].w
        if( curW > end){
            dl.push(curW)
            start = end
            end = curW
        }else if(curW < end && curW > start){
            end = curW
            dl.splice(-1, 1, curW)
        }else {
           dl = dl
        }
    }

    return dl.length
        
};