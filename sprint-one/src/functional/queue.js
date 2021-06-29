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
    const index = Object.keys(storage).length;
    storage[index] = value;
  }

  someInstance.dequeue = function () {
    var keysArray = Object.keys(storage);
    var firstElm = keysArray[0];

    delete storage[firstElm];
    console.log('q storage ', storage);
    return storage[firstElm];
  };


  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};