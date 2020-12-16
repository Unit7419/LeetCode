


var input1 = `
1
  2
    3
4
  5
  6
7`

export const transformIndent = (str) => {
    const rootN = {
        value: "root"
    }
    const arr = transform(str)
    compare(arr, 0, rootN, rootN)
    return rootN
}

const compare = (arr, currentIndex,fatherNode, rootN)=> {
    // let rootN = ''
    // if(fatherNode.value === "root"){
    //     rootN = fatherNode
    // }
    // 下个元素不存在
   if(!arr[currentIndex+1]){
    addChildNode(fatherNode, getNode(arr[currentIndex]))
    return fatherNode
   } else if(arr[currentIndex+1].length === arr[currentIndex].length){
       // 同级元素
       // 当前节点放入父节点
       addChildNode(fatherNode, getNode(arr[currentIndex]))
       // 对下面的节点重复上面的判断
       compare(arr, currentIndex+1, fatherNode, rootN)
   }else if(arr[currentIndex+1].length > arr[currentIndex].length){
       // 下个节点是子节点
        // 生成当前节点，带子节点
        let currentNode = getNode(arr[currentIndex])
       addChildNode(fatherNode, currentNode)
       compare(arr, currentIndex + 1, currentNode, rootN)
   } else if (arr[currentIndex+1].length < arr[currentIndex].length){
       // 当前元素是父元素下面最后一个子元素, 下一个元素是根节点的子节点
       addChildNode(fatherNode, getNode(arr[currentIndex]))
       compare(arr, currentIndex+1, rootN, rootN)
   }
}

const getNode = (i) => {
    return {
        value: i.replace(/\s/g, '')
    }
}
const transform = (str)=> {
    if(!str || str.replace(/\s/g, '').length === 0){
        return []
    }
    const arr = str.split(/\n+/)
    if(arr[0]===""){
        arr.shift()
    }else if(arr[length-1]===""){
        arr.pop()
    }
    return arr
}

const addChildNode = (fatherNode, childNode)=> {
    fatherNode.children? fatherNode.children.push(childNode): fatherNode.children = [childNode]
}



console.log(JSON.stringify(transformIndent(input1)));


