const linkedListFactory = () =>{
    const list = [];
    return {
        linkedList: list,
        append:  (value) => {
            //add node to end of the list
            list.push(nodeFactory(value));

            //update nextNodeValue for nodeBefore if current node isn't head
            if(list.length > 1){
                list[list.length-2].nextNode = list[list.length-1];
            }
        },
        prepend: (value) => {
            //add node to the front of the list
            //if there are other nodes present in the list
            // set nextNode value of the node being prepended to
            // the list to the node that follows it
            // otherwise leave it to the default
            if(list.length > 0){
                list.unshift(nodeFactory(value,list[0]));
            } else {
                list.unshift(nodeFactory(value));
            } 
        },
        size: () => list.length,
        head: () => list[0],
        tail: () => list[list.length-1],
        at: (index) => list[index],
        pop: () => {
            //removes last node in the list
            list.pop();

            //need to update nextNode for the tail by setting it to null
            list[list.length-1].nextNode = null;
        }, 
        contains: (value) => list.some(node => node.value == value),
        find:(value) => list.findIndex(node => node.value == value),
        toString: ()=> list.map(node => node.value.toString()).join(' -> ') + ' -> null',
    };
}

const nodeFactory = (value = null, nextNode = null) =>{
    return {
        value : value,
        nextNode: nextNode,
    };
}

module.exports = linkedListFactory;