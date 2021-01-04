/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     if(!nums || nums.length === 0){
//         return 
//     }
//     const res = nums.reduce((_, cur) => {
//         _[cur] = _[cur]?  _[cur]+1 : 1
//         return {..._}
//     }, {})
//    return Object.keys(res).find((v)=> {
//         return res[v] === 1
//     })
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用异或，相同或异或是0， 0和任何数异或是数本身
var singleNumber = function(nums) {
    let ans = 0
    nums.map((num)=> {
        ans ^= num
    })
    return ans
};