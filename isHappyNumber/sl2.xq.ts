// 集合 + 循环

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(!n){
        return false
    }
    const hashSet = new Set()
    while(n !== 1) {
        n = getSum(n)

        // 判断下个数是否存在过
        if(hashSet.has(n)){
            return false
        }else{
            hashSet.add(n)
        }
    }
    return true
};

const getSum = (n)=> {
    let l = n.length
    let sum =0
    n.toString().split('').forEach((v)=> (sum += Math.pow(v,2)))
    return sum
}