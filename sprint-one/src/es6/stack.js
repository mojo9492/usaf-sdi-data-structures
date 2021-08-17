class Stack {
  constructor() {
    this.stack = {}
    this.index = 0
  }

  push(item) {
    if (item) {
      this.stack[this.index] = item;
      this.index++
      return `Added ${item}`
    }
  }

  pop() {
    delete this.stack[this.index - 1]
    this.index--
    return this.size();
  }

  size() {
    return Object.keys(this.stack).length
  }

}

const myStack = new Stack();
console.log(myStack.push('this'))
console.log(myStack.pop())
console.log(myStack.push('that'))
console.log(myStack.pop())
console.log(myStack.size())
