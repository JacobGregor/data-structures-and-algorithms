"use strict";

const commonWord = require("../common-word");

describe("Finding the most common word in a given string", () => {
  it("given a string return the most common word", () => {
    let str = "in a galaxy far far away";
    let str2 = "in a galaxy far far far away away away away";

    expect(commonWord(str)).toBe("far");
    expect(commonWord(str2)).toBe("away");
  });
});
