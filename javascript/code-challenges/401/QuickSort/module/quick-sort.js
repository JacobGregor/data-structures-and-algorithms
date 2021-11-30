"use strict";

function quickSort(arr, left, right) {
  if (arr.length === 0) {
    return "empty array: error";
  }

  if (left < right) {
    let position = partition(arr, left, right);

    quickSort(arr, left, position - 1);

    quickSort(arr, position + 1, right);
  }
  return arr;
}

const partition = (arr, left, right) => {
  let pivot = arr[right];
  let low = left;

  for (let i = low; i < right; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, low);
      low++;
    }
  }
  let temp = arr[low];
  arr[low] = arr[right];
  arr[right] = temp;
  return low;
};

const swap = (arr, i, low) => {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};

module.exports = quickSort;
