/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    var ans = -99999999;
    var len = nums.length;
    nums.sort((a, b) => {return a - b;});
    for(var i = 0; i < len - 2; i++){
        var l = i + 1, r = len - 1;
        while(l < r){
            var sum = nums[i] + nums[l] + nums[r];
            if(Math.abs(ans - target) > Math.abs(sum - target)){
                ans = sum;
            }
            sum = sum - target;
            if(sum < 0){
                while(l < r && nums[l] === nums[++l]){}
            }else if(sum > 0){
                while(l < r && nums[r] === nums[--r]){}
            }else{
                break;
            }
        }
        if(ans === target) break;
    }
    return ans;
};