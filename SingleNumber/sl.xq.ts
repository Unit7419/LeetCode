/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(!nums || nums.length === 0){
        return 
    }
    const res = nums.reduce((_, cur) => {
        _[cur] = _[cur]?  _[cur]+1 : 1
        return {..._}
    }, {})
   return Object.keys(res).find((v)=> {
        return res[v] === 1
    })
};