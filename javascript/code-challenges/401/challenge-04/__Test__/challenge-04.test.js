"use strict";

const LinkedList = require("../module/linkedList");

describe("Insert Method", () => {
  it("Can successfully instantiate an empty linked list", () => {
    let list = new LinkedList();

    expect(list.head).toBe(null);
  });
  it("Can properly insert into the linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toBe(1);
  });
  it("The head property will properly point to the first node in the linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value).toBe(3);
  });
  it("Can properly insert multiple nodes into the linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value).toBe(3);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(1);
  });
  it("Will return true when finding a value within the linked list that exists", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(2)).toBe(true);
  });
  it("Will return false when searching for a value in the linked list that does not exist", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(4)).toBe(false);
  });
  it("Can properly return a collection of all the values that exist in the linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list).toEqual({
      head: { next: { next: { next: null, value: 1 }, value: 2 }, value: 3 },
    });
  });
});
