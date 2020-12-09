/**
 * 得到两个字符串连续相同字符最长的数量
 * @param {string} s1
 * @param {string} s2
 */
export const longestContinuousCommonStringJZ = function (s1, s2) {
    let result = '';
    for (let i = 0; i < s1.length; i++) {
        const s2position = s2.indexOf(s1[i]);
        let addFlag = false;
        if (s2position > -1) {
            let tempResult = '';
            for (let j = s2position; j < s2.length; j++) {
                if (s1[i] === s2[j]) {
                    tempResult+=s1[i];
                    i++; // 当下一个循环比较s1和s2不一样的时候这个1就会多加
                    addFlag = true;
                } else {
                    addFlag && i-- // 将多加的1减掉
                    break;
                }
            }
            if (tempResult.length > result.length) {
                result = tempResult
            }
        }
    }

    return result ? result : -1
}
