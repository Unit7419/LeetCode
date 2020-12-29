/**
 * Initialize your data structure here.
 */
export const MyHashMapJZ = function() {
    this.hash = {}
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMapJZ.prototype.put = function(key, value) {
    this.hash[key] = value
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMapJZ.prototype.get = function(key) {
    return typeof this.hash[key] !== 'undefined' ? this.hash[key] : -1
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMapJZ.prototype.remove = function(key) {
    delete this.hash[key]
};
