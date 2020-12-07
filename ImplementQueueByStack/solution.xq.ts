var CQueue = function() {
    // 申明两个栈
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // 取stack1的栈头就是取stack2的栈尾, stack2有元素直接取
    if(this.stack2.length){
        return this.stack2.pop()
    }
    // stack2为空，需要先把stack1中的元素一个个取出放入stack2中
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop())
    }
    return this.stack2.pop() || -1
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */