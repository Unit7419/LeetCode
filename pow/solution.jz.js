export function powJZ(x, n) {
    let result = 1;
    if(n === 0){
        return result
    }
    for(let i = 0; i < Math.abs(n); i++){
        result *= x
    }

    return n > 0 ? result : 1 / result
}
