"use strict";

const LinkedList = require("../module/linkedList");

describe("ll.kthFromEnd(k)", () => {
  it("Where k is greater than the length of the linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.kthFromEnd(8)).toEqual("exception");
  });
  it("Where k and the length of the list are the same", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.kthFromEnd(3)).toEqual("exception");
  });
  it("Where k is not a positive integer", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.kthFromEnd(-3)).toEqual("exception");
  });
  it("Where the linked list is of a size 1", () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.kthFromEnd(1)).toEqual("exception");
  });
  it("Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.kthFromEnd(0)).toEqual(1);
  });
});
