/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const map = {};
    let num = '' + n;
    
    do {
        let sum = 0;
        for (let i=0; i<num.length; i++) {
            sum += Math.pow(parseInt(num[i]), 2);
        }
        if (sum === 1) return true;
        map[num] = true;
        num = '' + sum;
    }while(!map[num]);

    return false;

};