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

  zip(lList1, lList2) {
    let currNode1 = lList1.head;
    let currNode2 = lList2.head;

    while (currNode1) {
      const temp = currNode1.next; // save relationship for LL1
      currNode1.next = currNode2; // redirect to LL2
      currNode2 = temp; // step through LL2
      currNode1 = currNode1.next;
    }
    return lList1;
  }
}

module.exports = LinkedList;
