const Stack = function() {
  this.instance = {};
  this.storage = {};
  Object.assign(instance, stackMethods);
  return instance;
};

const stackMethods = {};
stackMethods.push = function (value) {
  const index = Object.keys(storage).length;
    storage[index] = value;
}
stackMethods.pop = function () {
  const index = Object.keys(storage).length - 1;
  delete storage[index];
  console.log('stack storage ', storage);
  return storage;
}
stackMethods.size = function () {
  return Object.keys(storage).length;
}




