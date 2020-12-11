/**
 * 
 * @param num1 {}
 * @param num2 
 */
 export function powXq(num1: number, num2: number) {
     let result = 1;
     if(num2 === 0){
         return 1
     }
     for(var i = 1; i<= Math.abs(num2); i++){
         result *= num1
     }
     return num2 > 0 ? result : 1/ result
 }