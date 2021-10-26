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

  // adds a new node with the given value to the end of the list
  append(value) {
    let current = this.head;
    let newNode = new Node(value);
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // adds a new node with the given new value immediately before the first node that has the value specified

  insertBefore(value, newValue) {
    if (this.head) {
      let current = this.head;
      let previous = null;
      while (current) {
        if (current.value === value) {
          let newNode = new Node(newValue);
          if (previous) {
            previous.next = newNode;
            newNode.next = current;
          } else {
            this.head = newNode;
            newNode.next = current;
          }
        }
        previous = current;
        current = current.next;
      }
    }
  }

  // adds a new node with the given new value immediately after the first node that has the value specified
  // Add insertAfter();

  insertAfter(value, newValue) {
    if (this.head) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          let after = current.next;
          let newNode = new Node(newValue);
          current.next = newNode;
          newNode.next = after;
        }
        current = current.next;
      }
    }
  }
}

module.exports = LinkedList;
