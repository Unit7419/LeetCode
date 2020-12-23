/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const threeSumClosest = function(nums, target) {
    if(!target || !nums){
        return 0
    }
    let sum = 0
    let m = nums.legnth;
    let min = nums[0]+nums[1]+nums[2]-target
   for (let i = 0 ; i< m ; i++){
      for (let j=i+1; j< m; j++){
          for (let k=j+1; k< m; k++){
              sum = nums[i]+nums[j]+nums[k]-target
              if(Math.abs(sum)< Math.abs(min)){
                  min = sum
              }
          }
      }
   }
   return min + target
};