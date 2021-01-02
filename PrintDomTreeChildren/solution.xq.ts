

const bfsDom = (root, result=[]) => {
    if(!root){
        return 
    }
    const stack = [root]
    // 队列空表示没有子dom
    while(stack.length){
        // 堆栈首位取出，存储
        const black = stack.shift()
        result.push(black)
        // 子元素,放入堆栈
        const childs = black.children
        stack.push(...childs)
    }
    return result
}

const dfsDom = (root, result=[])=> {
    if(!root){
        return root
    }
    result.push(root)
    const childs = [...root.children]
    if(childs.length > 0){
        for(let i = 0; i< childs.length; i++) {
            dfsDom(childs[i], result)
        }
    }
    return result
}