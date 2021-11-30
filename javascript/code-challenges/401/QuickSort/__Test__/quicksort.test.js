"use strict";

let quickSort = require("../module/quick-sort");

describe("quickSort Tests", () => {
  it("quickSort an array", () => {
    let testArr = [8, 4, 23, 42, 16, 15];

    expect(quickSort(testArr, 0, testArr.length - 1)).toEqual([
      4, 8, 15, 16, 23, 42,
    ]);
  });
  it("returns error message on an empty array", () => {
    let testArr = [];

    expect(quickSort(testArr, 0, testArr.length - 1)).toEqual(
      "empty array: error"
    );
  });
  it("sorts an array with similar numbers", () => {
    let testArr = [5, 5, 6, 7, 5, 5, 6, 6];

    expect(quickSort(testArr, 0, testArr.length - 1)).toEqual([
      5, 5, 5, 5, 6, 6, 6, 7,
    ]);
  });
});
