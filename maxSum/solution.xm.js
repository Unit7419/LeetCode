export const maxArr = arr=>{
    let a = 0
    let max =0
    for(let i=0;i<arr.length;i++){
        if(a>=0){
            a=a+arr[i]
        }else{
            a=arr[i]
        }
        if(a>max)
        max=a
    }
    return max
}