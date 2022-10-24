const linkedListFactory = require('./linkedList');

let linkedList = linkedListFactory();

//
linkedList.append(10);
linkedList.append(5);
console.log(linkedList.linkedList);
//

//
linkedList.prepend(9);
console.log(linkedList.linkedList);
//

//
let size = linkedList.size()
console.log(size);
//

//
let head = linkedList.head();
console.log(head)
//

//
let tail = linkedList.tail();
console.log(tail);
//

//
console.log(linkedList.at(1));
//

//
linkedList.pop();
console.log(linkedList.linkedList);
//

//
console.log(linkedList.contains(3));
console.log(linkedList.contains(9));
//

//
console.log(linkedList.find(10));
//

//
console.log(linkedList.insertAt(7,0));
console.log(linkedList.insertAt(3,2));
console.log(linkedList.insertAt(2,3));
console.log(linkedList.linkedList);
//


//
console.log(linkedList.removeAt(0));
console.log(linkedList.removeAt(3));
console.log(linkedList.removeAt(1));
console.log(linkedList.linkedList);

//

//
console.log(linkedList.toString());
//

test('someTest', () => {
  expect(3).toBe(3);
});