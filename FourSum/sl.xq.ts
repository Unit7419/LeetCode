/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b)=> (a-b))
    let result = []
    const l = nums.length
    for(var i = 0; i<l-3; i++){
        if(i> 0 && nums[i]=== nums[i-1]){
            continue
        }
        if(nums[i]+nums[i+1]+nums[i+2]+nums[i+3] > target){
            break
        }
        if(nums[i]+nums[l-3]+nums[l-2]+nums[l-1]< target){
            continue
        }
       for(let j = i+1; j< l-2; j++){
           if(j>i+1 && nums[j] === nums[j-1]){
               continue
           }
                if(nums[i]+nums[j]+nums[j+1]+nums[j+2] > target){
                break
            }
                  if(nums[i]+nums[j]+nums[l-2]+nums[l-1]< target){
                continue
            }
            let start = j+ 1;
            let end = l-1;
       
      
            while(start<end){
                const sum = nums[i] + nums[j]+nums[start]+nums[end]
             if( sum === target){
                result.push([nums[i], nums[j], nums[start], nums[end]])
                while(start <end && nums[start] === nums[start+1] ){
                    start++
                }
                start++
                while(start < end && nums[end] === nums[end-1]){
                    end --
                }
                end--
             }
             if(sum < target){
                 start++
             }
             if(sum > target){
                 end--
             }
            }
        }
    }
    return result
};