"use strict";

const Node = require("./node");
const Stack = require("./stack");

class AnimalShelter {
  constructor() {
    this.dogArr = new Stack();
    this.catArr = new Stack();
    this.animalQueue = new Stack();
  }

  enqueue(animal) {
    if (animal === "cat") {
      this.catArr.push(animal);
    } else if (animal === "dog") {
      this.dogArr.push(animal);
    } else {
      return "We do not accept that animal at our shelter";
    }
  }

  dequeue(pref) {
    // Checks for null pref;
    if (pref !== "cat" && pref !== "dog") {
      return null;
    }
    // if queue is full and top value matches preference return that value;
    if (this.animalQueue === null && this.animalQueue.top.value === pref) {
      return this.animalQueue.pop();
    }
    // Checks if Queue is full and clears the queue if true;
    if (this.animalQueue.top !== null) {
      if (this.animalQueue.top.value === pref) {
        return this.animalQueue.pop();
      }
      if (this.animalQueue.top.value !== pref) {
        if (this.animalQueue.top.value === "cat") {
          this.catArr.push(this.animalQueue.top.value);
          this.animalQueue.pop();
        } else {
          this.dogArr.push(this.animalQueue.top.value);
          this.animalQueue.pop();
        }
      }
    }
    // if both arr's are empty return no animals to adopt;
    if (this.catArr.isEmpty() && this.dogArr.isEmpty()) {
      return "No animals to adopt 😢";
    }
    // dequeue for cat and pop pref;
    if (this.animalQueue.isEmpty() && pref === "cat") {
      while (!this.catArr.isEmpty()) {
        this.animalQueue.push(this.catArr.top.value);
        this.catArr.pop();
      }
    }
    // dequeue for dog and pop pref;
    if (this.animalQueue.isEmpty() && pref === "dog") {
      while (!this.dogArr.isEmpty()) {
        this.animalQueue.push(this.dogArr.top.value);
        this.dogArr.pop();
      }
    }
    let twoTops = this.animalQueue.top.value;
    this.animalQueue.pop();
    return twoTops;
  }
}

module.exports = AnimalShelter;
