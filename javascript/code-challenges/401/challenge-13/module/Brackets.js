"use strict";

class Brackets {
  constructor() {
    (this.front = []), (this.back = []);
  }

  validate(string) {
    let count = 0;
    let stack = [];
    let key = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    let library = ["(", ")", "{", "}", "[", "]"];

    for (let j = 0; j < string.length; j++) {
      const index = string[j];
      if (!library.includes(index)) {
        console.log("Letter Character");
      } else if (index === "(" || index === "{" || index === "[") {
        stack.push(index);
        count += 1;
      } else {
        let last = stack.pop();
        if (index !== key[last]) {
          return false;
        }
      } // closes else
    } // closes for loop
    if (stack.length !== 0) {
      return false;
    }
    console.log(count);
    if (count === 0) {
      return false;
    }

    return true;
  } // closes validate()
} //closes Brackets

module.exports = Brackets;
