"use strict";

const repeat = (str) => {
  let word = str.toLowerCase();
  let arr = word.split(" ");

  return firstRepeat(arr);
};

const firstRepeat = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (arr.indexOf(word) !== arr.lastIndexOf(word)) {
      return word;
    }
  }
};

module.exports = { repeat, firstRepeat };
