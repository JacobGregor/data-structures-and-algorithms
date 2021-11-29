const HashTable = require("../hashtable");
const Node = require("../module/node");
// const LinkedList = require("../LinkedList/linkedlist");

describe("HashTable Tests", () => {
  it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
    let table = new HashTable(1024);
    table.add("Jacob", "instructor");

    expect(table.map[201]).toEqual({
      head: { next: null, value: { Jacob: "instructor" } },
    });
  });
  it("Retrieving based on a key returns the value stored", () => {
    let table = new HashTable(1024);
    table.add("Jacob", "instructor");

    expect(table.find("Jacob")).toEqual("instructor");
  });
  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    let table = new HashTable(1024);
    table.add("Jacob", "instructor");

    expect(table.find("bryce")).toEqual(null);
  });

  // it("works properly if the value is divisible by 5: replaces the value with “Buzz”", () => {
  //   const KaryTree = new BinaryTree();
  //   const funTree = new BinaryTree();
  //   KaryTree.root = new Node(10);
  //   KaryTree.root.children.push(new Node(10));
  //   KaryTree.root.children.push(new Node(20));
  //   KaryTree.root.children.push(new Node(45));
  //   KaryTree.root.children[0].children.push(new Node(5));
  //   KaryTree.root.children[0].children.push(new Node(35));
  //   KaryTree.root.children[1].children.push(new Node(15));
  //   KaryTree.root.children[1].children.push(new Node(55));
  //   KaryTree.root.children[2].children.push(new Node(105));
  //   KaryTree.root.children[2].children.push(new Node(150));
  //   KaryTree.root.children[2].children.push(new Node(30));

  //   funTree.fizzBuzzTree(KaryTree);

  //   // expect(KaryTree.root.value).not.toBe("Fizz");
  //   // expect(KaryTree.root.children[0].children[0].value).not.toBe("Buzz");

  //   expect(KaryTree.root.children[0].children[1].value).toBe("Buzz");
  //   expect(KaryTree.root.children[1].children[1].value).toBe("Buzz");
  // });
  // it("works properly if the value is divisible by 15: replaces the value with “FizzBuzz”", () => {
  //   const KaryTree = new BinaryTree();
  //   const funTree = new BinaryTree();
  //   KaryTree.root = new Node(10);
  //   KaryTree.root.children.push(new Node(15));
  //   KaryTree.root.children.push(new Node(20));
  //   KaryTree.root.children.push(new Node(45));
  //   KaryTree.root.children[0].children.push(new Node(15));
  //   KaryTree.root.children[0].children.push(new Node(15));
  //   KaryTree.root.children[1].children.push(new Node(15));
  //   KaryTree.root.children[1].children.push(new Node(55));
  //   KaryTree.root.children[2].children.push(new Node(105));
  //   KaryTree.root.children[2].children.push(new Node(150));
  //   KaryTree.root.children[2].children.push(new Node(30));

  //   funTree.fizzBuzzTree(KaryTree);

  //   // expect(KaryTree.root.value).not.toBe("Fizz");
  //   // expect(KaryTree.root.children[0].children[0].value).not.toBe("Buzz");
  //   expect(KaryTree.root.children[0].children[1].value).toBe("FizzBuzz");
  //   expect(KaryTree.root.children[0].children[1].value).toBe("FizzBuzz");
  //   expect(KaryTree.root.children[1].children[1].value).toBe("Buzz");
  // });
});
