/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagram = function(strs) {
    if (!strs || !strs.length) return []
    const map = {};
    
    for (let i of strs) {
      let temp = [...i].sort().join();
      if (!map[temp]) {
        map[temp] = [i]
      } else {
        map[temp].push(i)
      }
    }
  
    return Object.values(map)
  };