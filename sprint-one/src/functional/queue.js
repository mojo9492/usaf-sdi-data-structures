// enqueue(element) - Adds an element to the back of the queue
// dequeue() - Remove and return the element at the front of the queue
// size() - Return the number of items in the queue
// front() - Return the element at the front of the queue
// isEmpty() - Returns true or false whether the queue has elements
// printQueue() - Prints all the elements of the queue

var Queue = function (element) {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.enqueue = function (value) {
    const propertyIndex = Object.keys(storage).length;

    storage[propertyIndex] = value;
  }

  someInstance.dequeue = function () {
    const lastPropertyIndex = Object.keys(storage).length - 1;
    delete storage[lastPropertyIndex];
    console.log('obj ', storage);
    console.log('----END OF METHOD----');
  };


  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};