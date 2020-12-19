/**
 * 
 * @param arr num[]
 */

export const maxSumXq = (arr) => {
    let res = arr[0]
    let subSum = 0
    for (let i in arr){
        if(subSum > 0){
            subSum += arr[i]
        }else{
            subSum = arr[i]
        }
        res = Math.max(res, subSum)
    }

    return res
}