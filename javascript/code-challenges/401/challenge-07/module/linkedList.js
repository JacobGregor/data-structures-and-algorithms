"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let oldHead = this.head;
    let newHead = new Node(value);
    newHead.next = oldHead;
    this.head = newHead;
    console.log(this.head);
  }

  kthFromEnd(k) {
    if (k >= 0) {
      let temp = this.head;
      let current = this.head;
      let length = 0;
      while (temp !== null) {
        temp = temp.next;
        length++;
      }
      if (length <= k) {
        return "exception";
      }
      for (let i = 0; i < length - k - 1; i++) {
        current = current.next;
      }
      return current.value;
    }
    return "exception";
  }
}

module.exports = LinkedList;
