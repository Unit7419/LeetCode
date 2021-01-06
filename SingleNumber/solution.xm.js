/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b)=>{return a-b})
    for(var i=0;i<nums.length;i++){
        if(nums[i] == nums[i+1]){
            nums.splice(i,2)
            i=-1
        }
        continue
    }
    return nums[0]
    };