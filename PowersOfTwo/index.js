
/**
 * 
 * @description  给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * 
 * @example Example:

Input: 1
Output: true
explain:2^0 = 1
 * 
 * 

 */
var isPowerOfTwo = function(n) {
    if(n>1){
        while(n!=1){
            if(n%2==0){
                n/=2
            }else{
                return false
            }
        }
        return true
    }else if(n==1){
        return true
    }else{
        return false
    }
};
console.log(isPowerOfTwo(3))