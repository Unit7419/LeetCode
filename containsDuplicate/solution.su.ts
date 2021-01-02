/**
 * 
 * @param arr number[]
 * @returns boolean
 */
// export const containsDuplicate = (arr)=> {
//     if(!arr || arr.length === 0){
//         return false
//     }
//     const set = new Array(arr.length).fill(false)
//     let flag = false
//     for(let i in arr) {
//         if(set[arr[i]]){
//            flag = true
//            break
//         }
//         set[arr[i]] = true
//     }

//     return flag
// }

export const containsDuplicate = (arr) => {
        if(!arr || arr.length === 0){
           return false
        }
        arr.sort((a,b)=> (a-b))
        for(let i = 0; i< arr.length; i++) {
            if(arr[i] === arr[i+1] ){
                return true
            }
        }
        return false
}