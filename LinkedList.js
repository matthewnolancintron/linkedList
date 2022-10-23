const linkedListFactory = () =>{
    //represent the full list
    return {
        list: [],
        append:  (value) => list.push(nodeFactory(value)),
        prepend: (value) => list.unshift(nodeFactory(value)),
        size: () => list.size,
        head: () => list[0],
        tail: () => list[list.length-1],
        at: (index) => list[index],
        pop: () => list.pop(),
        contains: (value) => list.some(node.value == value),
        find:(value) => list.find(node.value == value),
        toString: ()=> list.map(node => node.toString()),
    };
}

const nodeFactory = (value = null, nextNode = null) =>{
    return {
        value : value,
        nextNode: nextNode,
    };
}