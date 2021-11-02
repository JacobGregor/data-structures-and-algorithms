"use strict";

const Node = require("./node");
const Stack = require("./stack");

class pseudoQueue {
  constructor() {
    this.arr1 = new Stack();
    this.arr2 = new Stack();
  }

  enqueue(value) {
    if (!value) {
      return "Nah son";
    } else {
      this.arr1.push(value);
    }
  }
  dequeue() {
    if (this.arr1.isEmpty() && this.arr2.isEmpty()) {
      return "both empty";
    }
    if (this.arr2.isEmpty()) {
      while (!this.arr1.isEmpty()) {
        this.arr2.push(this.arr1.top.value);
        this.arr1.pop();
      }
    }
    let twoTops = this.arr2.top.value;
    this.arr2.pop();
    return twoTops;
  }
}

module.exports = pseudoQueue;
