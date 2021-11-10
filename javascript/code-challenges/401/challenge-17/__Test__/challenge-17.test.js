const BinaryTree = require("../module/BinaryTree");
const Node = require("../module/node");

describe("Binary Tree Tests", () => {
  it("Can successfully Return: list of all values in the tree, in the order they were encountered", () => {
    const binarytree = new BinaryTree();
    binarytree.root = new Node(2);
    binarytree.root.left = new Node(7);
    binarytree.root.left.left = new Node(2);
    binarytree.root.left.right = new Node(6);
    binarytree.root.left.right.left = new Node(5);
    binarytree.root.left.right.right = new Node(11);
    binarytree.root.right = new Node(5);
    binarytree.root.right.right = new Node(9);
    binarytree.root.right.right.left = new Node(4);
    expect(binarytree.breadthFirst(binarytree.root)).toEqual([
      2, 7, 5, 2, 6, 9, 5, 11, 4,
    ]);
  });
  it("Can Return Error: if given an argument with no root value", () => {
    const binarytree = new BinaryTree();
    binarytree.root = new Node();
    expect(binarytree.breadthFirst(binarytree.root)).toEqual("Empty Tree");
  });
});
