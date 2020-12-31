/**
 * Initialize your data structure here.
 */
// var MyHashSet = function() {
//     this.arr = []

// };
// MyHashSet.prototype.add = function(key) {
// if(this.arr.indexOf(key) == -1){
//     this.arr.push(key)
// }
// };
// MyHashSet.prototype.remove = function(key) {
//     if(this.arr.indexOf(key) !== -1){
//         this.arr.splice(this.arr.indexOf(key),1)
//     }
// };
// MyHashSet.prototype.contains = function(key) {
//     return this.arr.indexOf(key) !==-1
// };

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

 /**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.obj = {}
};

/** 
 * @param {number} key
 * @return {void}
 * 用对象方式设计哈希集合
 */
MyHashSet.prototype.add = function(key) {
this.obj[key] = key
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    delete this.obj[key]
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.obj[key] == key
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
