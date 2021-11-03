const Brackets = require("../module/Brackets");

describe("Brackets Tests", () => {
  it("should succesfully test for matching brackets in the string ", () => {
    const brackets = new Brackets();
    expect(brackets.validate("[]")).toEqual(true);
    expect(brackets.validate("()")).toEqual(true);
    expect(brackets.validate("{}")).toEqual(true);
  });
  it("should succesfully test for matching brackets in the string and console.log() characters ", () => {
    const brackets = new Brackets();
    expect(brackets.validate("[Jake]")).toEqual(true);
    expect(console.log("Letter Character"));
  });
  it("successfully return False because of an extra opening bracket ", () => {
    const brackets = new Brackets();
    expect(brackets.validate("[]{")).toEqual(false);
    expect(brackets.validate("[][")).toEqual(false);
    expect(brackets.validate("[](")).toEqual(false);
  });
  it("successfully return False because of an extra closing bracket ", () => {
    const brackets = new Brackets();
    expect(brackets.validate("[]}")).toEqual(false);
  });

  it("successfully return False if there are brackets in the string ", () => {
    const brackets = new Brackets();
    expect(brackets.validate("jake")).toEqual(false);
    expect(brackets.count === 0);
  });
});
