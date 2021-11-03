"use strict";

const queue = require("../../challenge-10/module/queue");

class AnimalShelter {
  constructor() {
    this.dog = new queue();
    this.cat = new queue();
  }

  enqueue(animal) {
    if (animal === "cat") {
      this.cat.enqueue(animal);
    } else if (animal === "dog") {
      this.dog.enqueue(animal);
    } else {
      return "We do not accept that animal at our shelter";
    }
  }

  dequeue(pref) {
    if (this.dog.isEmpty() && this.cat.isEmpty()) {
      return "Sorry, no animals in the shelter to adopt. 😭";
    }
    if (pref === "cat") {
      return this.cat.dequeue();
    } else if (pref === "dog") {
      return this.dog.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
