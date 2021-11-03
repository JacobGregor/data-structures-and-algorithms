const AnimalShelter = require("../module/AnimalShelter");

describe("AnimalShelter Tests", () => {
  it("successfully enque a cat ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("cat");
    animal.enqueue("cat");
    expect(animal.cat.front.value).toBe("cat");
    expect(animal.cat.back.value).toBe("cat");
  });
  it("successfully enque a dog ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("dog");
    animal.enqueue("dog");
    expect(animal.dog.front.value).toBe("dog");
    expect(animal.dog.back.value).toBe("dog");
  });
  it("successfully fail to enque due to no input", () => {
    const animal = new AnimalShelter();
    animal.enqueue("");
    expect(animal.enqueue("")).toBe(
      "We do not accept that animal at our shelter"
    );
  });
  it("successfully dequeue a cat ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("cat");
    animal.enqueue("cat");
    animal.dequeue("cat");
    expect(animal.cat.front.value).toBe("cat");
    expect(animal.cat.front.next).toBe(null);
    expect(animal.cat.back.value).toBe("cat");
  });
  it("successfully dequeue a dog ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("dog");
    animal.enqueue("dog");
    animal.dequeue("dog");
    expect(animal.dog.front.value).toBe("dog");
    expect(animal.dog.front.next).toBe(null);
    expect(animal.dog.back.value).toBe("dog");
  });
  it("fail dequeue because no pref was given ", () => {
    const animal = new AnimalShelter();
    animal.enqueue("dog");
    animal.dequeue("");
    expect(animal.dequeue("")).toBe(null);
  });
  it("fail to dequeue, no animals in the shelter", () => {
    const animal = new AnimalShelter();
    animal.dequeue("dog");
    expect(animal.dequeue("dog")).toBe(
      "Sorry, no animals in the shelter to adopt. 😭"
    );
  });
});
