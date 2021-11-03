const AnimalShelter = require("../module/AnimalShelter");

describe("AnimalShelter Tests", () => {
  it("successfully enque a cat ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("cat");
    expect(animal.catArr.top.value).toBe("cat");
  });
  it("successfully enque a dog ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("dog");
    expect(animal.dogArr.top.value).toBe("dog");
  });
  it("successfully fail to enque due to no input", () => {
    const animal = new AnimalShelter();
    animal.enqueue("");
    expect(animal.enqueue("")).toBe(
      "We do not accept that animal at our shelter"
    );
  });
  it("successfully fail to enque due to animal not being cat or dog ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("lizard");
    expect(animal.enqueue("lizard")).toBe(
      "We do not accept that animal at our shelter"
    );
  });
  it("successfully dequeue a cat ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("cat");
    animal.enqueue("cat");
    expect(animal.dequeue("cat")).toBe("cat");
    expect(animal.animalQueue.top.value).toBe("cat");
  });
  it("successfully dequeue a dog ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("dog");
    animal.enqueue("dog");
    expect(animal.dequeue("dog")).toBe("dog");
    expect(animal.animalQueue.top.value).toBe("dog");
  });
  it("successfully dequeue multiple cats ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("cat");
    animal.enqueue("cat");
    expect(animal.dequeue("cat")).toBe("cat");
    expect(animal.dequeue("cat")).toBe("cat");
    expect(animal.animalQueue.top).toBe(null);
    expect(animal.catArr.top).toBe(null);
  });
  it("successfully dequeue multiple dogs ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("dog");
    animal.enqueue("dog");
    expect(animal.dequeue("dog")).toBe("dog");
    expect(animal.dequeue("dog")).toBe("dog");
    expect(animal.animalQueue.top).toBe(null);
    expect(animal.catArr.top).toBe(null);
  });
  it("Fails to dequeue becuase there are nop animals to adopt ", () => {
    const animal = new AnimalShelter();
    expect(animal.dequeue("cat")).toBe("No animals to adopt 😢");
  });
  it("Fails to dequeue becuase pref wasnt cat or dog ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("cat");
    expect(animal.dequeue("lizard")).toBe(null);
  });
});
