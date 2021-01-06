/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    // 相同字符串
    // 索引和最小
    const m = list1.length
    const n = list2.length
    let minIndex = m +n-2
    let res = []
    for (let i = 0; i< m; i++) {
        let v = list1[i]
        for(let j = 0; j< n; j++) {
            let v1 = list2[j]
            
            if(v === v1) {
                // 找到相同的就不再往后找了
                // 注意索引和相等的情况
                const curIndex = i+j
                if(curIndex < minIndex){
                    minIndex = curIndex
                    res = [v]
                }else if(curIndex === minIndex){
                    res.push(v)
                }
            }
        }
    }
    return res
};