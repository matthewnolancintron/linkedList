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
        /**
        Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.
         */
        insertAt:(value,index)=>{
            /**
             insertAt(value, index) that inserts a new node with the provided value at the given index. 
             */
            if(index < list.length-1 && index > 0){
                //node being inserted is not the head or the tail,
                //set next node to the node that follows
                list.splice(index,0,nodeFactory(value,list[index])); 

                //since node being inserted isn't head or tail
                // than there is a node before it who's nextNode value 
                //needs to be updated

                //previous node's nextnode value being updated
                list[index-1].nextNode = list[index];
                
            } else if(index === 0){
                //node being inserted as the head,
                //set nextNode to node that follows
                list.splice(index,0,nodeFactory(value,list[index])); 
            } else if(index === list.length-1){
                //node being insserted as the tail
                list.push(nodeFactory(value)); 
        
                //only need to update the nextNode value for the node before 
                list[list.length-2].nextNode = list[index+1];
            }

        },
        removeAt:(index)=>{
            /**
             removeAt(index) that removes the node at the given index.
             */
            if(index === 0){
                //if index is zero node being removed is the head
                list.shift();

                //update the nextNode value for the new head
                list[index].nextNode = list[index+1];

            } else if(index === list.length-1){
                //if index is equal to last index of the list or list.length-1
                //node being removed is the tail
                list.pop();

                //set nextNode value for new tail to null
                list[index-1].nextNode = null;

            } else {
                //node being remove isn't the tail or the head
                list.splice(index,1);

                //need to update next node value for the node that was before the removed node
                list[index-1].nextNode = list[index];
            }


            
        }

    };
}

const nodeFactory = (value = null, nextNode = null) =>{
    return {
        value : value,
        nextNode: nextNode,
    };
}

module.exports = linkedListFactory;