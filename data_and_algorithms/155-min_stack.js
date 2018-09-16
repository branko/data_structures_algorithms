
// 1 4 3 7


// stack:    [1, 4, 3, 7]
// minStack: [1, 1, 1, 1]


function MinStack() {
  this.stack = [];
  this.minStack = [];
}

MinStack.createNew = function() {
  return new MinStack()
}

MinStack.prototype.push = function push(x) {
  let min = this.getMin() === undefined ? x : this.getMin()

  this.stack.push(x)
  if (x <= min) {
    this.minStack.push(x)
  } else {
    this.minStack.push(min)
  }
}

MinStack.prototype.pop = function pop() {
  this.minStack.pop()
  return this.stack.pop();
}

MinStack.prototype.top = function top() {
  return this.stack[this.stack.length - 1]
}

MinStack.prototype.getMin = function getMin() {
  console.log(this.minStack)
  return this.minStack[this.minStack.length - 1]
}

let minStack = Object.create(MinStack).createNew()

minStack.push(0)
minStack.push(1)
minStack.push(0)
console.log(minStack.getMin())
minStack.pop()
console.log(minStack.getMin())

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */