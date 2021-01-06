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
MyHashSet.prototype.put = function(key,value) {
this.obj[key] = value
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
MyHashSet.prototype.get = function(key) {
    return this.obj[key] !== undefined ? this.obj[key]:-1
};