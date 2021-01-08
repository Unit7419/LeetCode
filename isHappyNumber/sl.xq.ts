// 快慢指针

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = getNext(n)
    let fast = getNext(getNext(n))
    while(fast !== slow) {
        slow = getNext(slow)
        fast = getNext(getNext(fast))
        if(fast === 1){
            break
        }
    }
    return fast === 1
};

const getNext = (n)=> {
    let sum = 0
     n.toString().split('').map((v) => sum += Math.pow(v, 2))
     return sum
}