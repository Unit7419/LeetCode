/*
 * @Date: 2020-12-06 12:59:13
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-06 21:39:54
 * @Description:
 */

export var CQueue = function() {
  this.queueA = []
  this.queueB = []
  this.logs = [null]
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.queueA.push(value)
  this.logs.push(null)
  return value
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  const n = this.queueA.shift()
  const v = n === undefined ? -1 : n

  this.queueB.push(v)
  this.logs.push(v)
  
  return this.queueB.shift()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */