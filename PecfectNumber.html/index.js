/**
 * @description For a positive integer, we call it a perfect number if it is equal to the sum of all the positive factors except itself.if it is a perfect number return true,else return false 

Your algorithm should run in O(n) complexity.
 * @example Input: 28
Output: true
Explanation: 28=1+2+4+7+14
 * 
 */
var checkPerfectNumber = function(num) {
    var arr=[]
    if(num<=1||num>100000000){
        return false
    }else{
        for(var i=1;i<num;i++){
            if(num%i==0){
                arr.push(i)
                }
        }
      return (arr.reduce((s,t)=>{return s+t})==num)
    }
   
};
checkPerfectNumber(28)