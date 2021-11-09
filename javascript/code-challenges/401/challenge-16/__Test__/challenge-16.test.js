const BinaryTree = require("../module/BinaryTree");
const Node = require("../module/node");

describe("Binary Tree Tests", () => {
  it("Can successfully find the max value in a tree", () => {
    const binarytree = new BinaryTree();
    binarytree.root = new Node(2);
    binarytree.root.left = new Node(7);
    binarytree.root.left.left = new Node(1);
    binarytree.root.left.right = new Node(6);
    binarytree.root.right = new Node(15);
    binarytree.root.right.left = new Node(4);
    binarytree.root.right.right = new Node(9);
    expect(binarytree.findMax()).toEqual(15);
  });
});
