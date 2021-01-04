/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // 排序 + 双指针
    nums1.sort((x, y)=> x-y)
    nums2.sort((x,y)=> x-y)
    let index1=0;
    let index2=0
    const l1 = nums1.length, l2=nums2.length;
    const res = []
    while(index1< l1 && index2< l2){
        if(nums1[index1] === nums2[index2]){
            // 去重
            if(!res.length || res[res.length-1]!== nums1[index1]){
                res.push(nums1[index1])
            }
            index1++
            index2++
        }else if(nums1[index1] < nums2[index2]){
            index1++
        }else{
            index2++
        }
    }
    return res
};