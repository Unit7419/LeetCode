// 利用hasmap将其中一个数组进行改造
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    // 利用线性hash 表
    const mapHash = new Map()
    list1.forEach((v, i)=> mapHash.set(v, i))
    let res = []
    let min = list2.length + list1.length
    list2.forEach((v, j)=> {
        if(mapHash.has(v)){
            // 相同
            let cur = mapHash.get(v) + j
            if(cur < min) {
                min = cur
                res = [v]
            }else if(min === cur){
                res.push(v)
            }
        }
    })

    return res 

};