/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var ans = [];
    var len = nums.length;
    nums.sort((a,b) => {return a - b});
    for(var i = 0; i < len - 3; i++){
        if(i > 0 && nums[i - 1] === nums[i]) continue;
        for(var j = i + 1; j < len - 2; j++){
            if(j > i + 1 && nums[j - 1] === nums[j]) continue;
            var l = j + 1, r = len - 1;
            while(l < r){
                var sum = nums[i] + nums[j] + nums[l] + nums[r];
                if(sum < target){
                    while(l < r && nums[l] === nums[++l]){}
                }else if(sum > target){
                    while(l < r && nums[r] === nums[--r]){}
                }else{
                    ans.push([nums[i], nums[j], nums[l], nums[r]]);
                    while(l < r && nums[l] === nums[++l]){}
                    while(l < r && nums[r] === nums[--r]){}
                }
            }
        }
    }
    return ans;
};