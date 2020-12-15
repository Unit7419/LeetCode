/**
 * @param {string} s
 * @return {string[]}
 */
export const restoreIpAddresses = function(s) {
    // 字符串长度 1-3
    // 字符串大小 0-255
    // 字符串 length > 1 str[0] !== 0
    if(s.length<=3 || s.length > 12){
        return []
    }
       let result = []
       dfs(s, [], result)
       return result
   };
   
   const dfs = (remain, temp, result)=> {
       // 已经有三段有效，只需要看remain
       if(temp.length === 3) {
           regular(remain) && result.push([...temp, remain].join("."))
       }
       // 字符串长度 1-3
       for(let i=1; i<=3; i++){
           regular(remain.substr(0,i)) && dfs(remain.slice(i), [...temp, remain.substr(0,i)], result)
       }
      
   }
   
   
   // 判断每段是否合法
   const regular = function (s) {
       if(!s){
           return false
       }
       return +s>=0 && +s<=255 &&  (s.length> 1 ? !!Number(s.substr(0,1)) : true)
   }
   