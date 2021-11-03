"use strict";

const Node = require("./node.js");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let current = this.top;
    let newNode = new Node(value);
    newNode.next = current;
    this.top = newNode;
  }

  pop() {
    let current = this.top;
    if (this.isEmpty()) {
      return "empty stack";
    }
    this.top = current.next;
    return current.value;
  }
  peek() {
    if (this.isEmpty()) {
      return "empty stack";
    }
    let current = this.top.value;
    return current;
  }
  isEmpty() {
    let current = this.top;
    if (!current) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Stack;
