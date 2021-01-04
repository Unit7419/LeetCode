/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    const l = s.length
    let obj = {}
    for (let i =0; i< l; i++){
        let key = s[i]
        if(obj[key]){
            obj[key] = obj[key] + 1
        }else{
            obj[key] = 1
        }
    }
    let str = ' '
    for(let key in obj){
        if(obj[key] === 1){
            str=key
            break
        }
    }
    return str
  };