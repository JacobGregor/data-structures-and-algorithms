"use strict";

const repeat = (str) => {
  let lower = str.toLowerCase();
  let arr = lower.split(" ");
  let repeated = [];
  let stop;

  const _traverse = (arr, word, i) => {
    if (repeated.includes(word)) {
      return;
    }
    if (stop) {
      return;
    }
    if (word === arr[i]) {
      repeated.push(word);
      stop = true;
      return;
    } else {
      _traverse(arr, word, i + 1);
    }
  };

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (stop) {
      return repeated;
    } else _traverse(arr, word, 1);
  }
};

// My attempt at a recursive solution.. doesnt work.

module.export = repeat;
