"use strict";
const { repeat, firstRepeat } = require("../passing/repeat");

describe("repeat testing", () => {
  it("Should return the first repeated word in the array", () => {
    expect(repeat("Hello how are you doing, hello")).toBe("hello");
  });
});
