"use strict";

const LinkedList = require("../module/linkedList");

describe("zip", () => {
  it("Alternates between lList1 & lList2 merging values", () => {
    let list1 = new LinkedList();
    list1.insert(2);
    list1.insert(4);

    let list2 = new LinkedList();
    list2.insert(1);
    list2.insert(3);

    let list3 = new LinkedList();

    expect(list3.zip(list1, list2)).toEqual({
      head: {
        next: { next: { next: { next: null, value: 2 }, value: 1 }, value: 3 },
        value: 4,
      },
    });
  });
});
