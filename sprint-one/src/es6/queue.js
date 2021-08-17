class Queue {
  constructor() {
    this.queue = {}
    this.index = 0
  }

  enqueue(item) {
      this.queue[this.index] = item
      this.index++
  }

  dequeue() {
    if (this.index > 0) {
      delete this.queue[this.index - 1]
    }
   }

  size() {
    return Object.keys(this.queue).length
  }
}
