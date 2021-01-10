/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const ans =[],map=new Map(),has=new Map()
    for(var i=0;i<list1.length;i++){
        map.set(list1[i],i)
    }
    for(var i=0;i<list2.length;i++){
        if(map.has(list2[i])){
            has.set(list2[i],i+map.get(list2[i]))
        }
    }
    let min =Math.min(...has.values())
    for(let [k,v] of has){
        if(v == min){
            ans.push(k)
        }
    }
    return ans
};