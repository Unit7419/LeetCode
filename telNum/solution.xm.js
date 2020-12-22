/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombination = function(digits) {
    let len=digits.length;
    if(!len) return [];
    let dictionary = [[],[],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']] 
    let res=[];
    for(let num of digits){
        let w=dictionary[num];
        if(res.length>0){
            let tmp=[]
            for(let i=0;i<res.length;i++){
                let w1=w.length;
                for(let j=1;j<w1;j++){
                    tmp.push(res[i]+w[j])
                }
                res[i]+=w[0]
            }
            res.push(...tmp)
        }else{
            res.push(...w)
        }
    }
    return res
};

letterCombination('23')