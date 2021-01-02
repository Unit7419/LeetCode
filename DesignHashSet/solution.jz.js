/**
 * Initialize your data structure here.
 */
var MyHashSetJZ = function() {
    this.hash = {}
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSetJZ.prototype.add = function(key) {
    this.hash[key] = true
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSetJZ.prototype.remove = function(key) {
    delete this.hash[key]
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSetJZ.prototype.contains = function(key) {
    return !!this.hash[key]
};
