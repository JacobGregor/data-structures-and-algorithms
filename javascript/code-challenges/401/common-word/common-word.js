"use strict";

const commonWord = (string) => {
  let words = string.toLowerCase().split(" ");
  let map1 = new Map();
  let mostCommon;
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let counter = map1.get(words[i]);
    if (map1.has(words[i])) {
      map1.set(words[i], counter + 1);
    } else {
      map1.set(words[i], 1);
    }
  }

  const iterator1 = map1[Symbol.iterator]();

  for (const item of iterator1) {
    if (item[1] > count) {
      count = item[1];
      mostCommon = item[0];
    }
  }
  return mostCommon;
};

module.exports = commonWord;
