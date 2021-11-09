const BinaryTree = require("../module/BinaryTree");
const BinarySearchTree = require("../module/BinarySearchTree");
const Node = require("../module/node");

describe("Binary Tree Tests", () => {
  it("Can successfully instantiate an empty tree", () => {
    const binarytree = new BinaryTree();
    const binarysearchtree = new BinarySearchTree();
    expect(binarytree.root).toEqual(null);
    expect(binarysearchtree.root).toEqual(null);
  });
  it("Can successfully instantiate a tree with a single root node", () => {
    const binarysearchtree = new BinarySearchTree();
    binarysearchtree.add(10);
    expect(binarysearchtree.root.value).toEqual(10);
  });
  it("Can successfully instantiate a tree with a single root node", () => {
    const binarysearchtree = new BinarySearchTree();
    binarysearchtree.add(10);
    binarysearchtree.add(15);
    binarysearchtree.add(8);
    expect(binarysearchtree.root.value).toEqual(10);
    expect(binarysearchtree.root.right.value).toEqual(15);
    expect(binarysearchtree.root.left.value).toEqual(8);
  });
  it("Can successfully return a collection from a preorder traversal", () => {
    const binarytree = new BinaryTree();
    binarytree.root = new Node(10);
    binarytree.root.left = new Node(8);
    binarytree.root.right = new Node(15);
    binarytree.root.left.left = new Node(6);
    binarytree.root.left.right = new Node(14);
    expect(binarytree.preOrder(binarytree.root)).toEqual([10, 8, 6, 14, 15]);
  });
  it("Can successfully return a collection from an inorder traversal", () => {
    const binarytree = new BinaryTree();
    binarytree.root = new Node(10);
    binarytree.root.left = new Node(8);
    binarytree.root.right = new Node(15);
    binarytree.root.left.left = new Node(6);
    binarytree.root.left.right = new Node(14);
    expect(binarytree.inOrder(binarytree.root)).toEqual([6, 8, 14, 10, 15]);
  });
  it("Can successfully return a collection from a postorder traversal", () => {
    const binarytree = new BinaryTree();
    binarytree.root = new Node(10);
    binarytree.root.left = new Node(8);
    binarytree.root.right = new Node(15);
    binarytree.root.left.left = new Node(6);
    binarytree.root.left.right = new Node(14);
    expect(binarytree.postOrder(binarytree.root)).toEqual([6, 14, 8, 15, 10]);
  });
  it("Can successfully return a value from a Binary Tree if the tree contains the value", () => {
    const binarysearchtree = new BinarySearchTree();
    binarysearchtree.add(10);
    binarysearchtree.add(15);
    binarysearchtree.add(8);
    expect(binarysearchtree.contains(15)).toEqual(true);
  });
});
