describe("pseudoQueue", () => {
  it("enqueue into a queue", () => {
    const queue = new pseudoQueue();
    queue.enqueue(1);
    expect(queue.arr1.top.value).toBe(1);
  });
});

describe("pseudoQueue", () => {
  it("fail to enqueue", () => {
    const queue = new pseudoQueue();
    queue.enqueue();
    expect(queue.enqueue()).toBe("Nah son");
  });
});

describe("pseudoQueue", () => {
  it("dequeue into a queue", () => {
    const queue = new pseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
  });
});
describe("pseudoQueue", () => {
  it("can fail a dequeue", () => {
    const queue = new pseudoQueue();
    expect(queue.dequeue()).toBe("both empty");
  });
});
describe("pseudoQueue", () => {
  it("can dequeue and enqueue and still get the approriate FIFO value.", () => {
    const queue = new pseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.enqueue(40);
    queue.enqueue(50);
    expect(queue.dequeue()).toBe(2);
  });
});
