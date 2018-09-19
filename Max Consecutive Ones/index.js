/**
 * @description Given a binary array, calculate the number of maximum continuous 1.

Your algorithm should run in O(n) complexity.
 * @example Input: [1,1,0,1,1,1,0,1]
Output: 3
Explanation: The first two and last three are 1 consecutive, so the maximum continuous 1 is 3
 * 
 */
var findMaxConsecutiveOnes = function(nums) {
    var count=0;
    var arr=[];
    for(var i=0;i<nums.length;i++){
            if(nums[i]==1){
                count++
            }else{
                count=0
            }
            arr.push(count)
        }
    return Math.max.apply(null,arr)

};
findMaxConsecutiveOnes([0])