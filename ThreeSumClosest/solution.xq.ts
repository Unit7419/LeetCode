/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 排序
    if(!nums || nums.length< 3) {
        return null
    }
    nums.sort((a, b)=> (a-b))
    let l = nums.length
    let ans = nums[0]+nums[1]+ nums[l-1]
    let sum = 0
    for(let i=0; i< l-2; i++) {
        if(ans === target){
            // 相等退出外循环
            break
        }
        let start = i+1;
        let end = l-1
        while(start < end){
            sum = nums[i] + nums[end] + nums[start]
             if(sum < target){
                start++
            }else if(sum > target){
                end--
            }else{
                // 相等退出循环
                ans = sum
                break
            }
            if(Math.abs(sum - target) < Math.abs(ans-target)){
                ans = sum
            }
        }
    }
    return ans
};