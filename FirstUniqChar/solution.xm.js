/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    if(s.length ==0){
            return  " "; 
        }
    
        var map = {}
        for(let i = 0 ; i < s.length ; i++){
            var charX = s[i]
            if(!map[charX]){
                map[charX] = 1
            }else{
                map[charX]++
            }
        }
    for(var j = 0 ; j < s.length ; j++){
            var charY = s[j]
            if(map[charY] == 1){
                return charY;
            }
        }
        return ' '
    };