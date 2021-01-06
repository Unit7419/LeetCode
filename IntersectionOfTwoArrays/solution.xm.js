/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(arr1, arr2) {
    arr1.sort((a,b)=>{a-b})
    arr2.sort((a,b)=>{a-b})
    arr1=[...new Set(arr1)]
    arr2=[...new Set(arr2)]
    var newArr =[]
    for(var i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            newArr.push(arr1[i])
        }
    }
    return newArr
};