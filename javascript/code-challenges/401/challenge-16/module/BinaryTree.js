"use strict";

class BinaryTree {
  constructor() {
    this.root = null;
  }

  traverse(node) {
    if (node === null) {
      return 0.0000001;
    }
    let root = node.value;
    let leftRootValue = this.traverse(node.left);
    let rightRootValue = this.traverse(node.right);

    if (leftRootValue > root) {
      root = leftRootValue;
    }
    if (rightRootValue > root) {
      root = rightRootValue;
    }
    return root;
  }

  findMax() {
    if (this.root === null) {
      return `Root does not exist`;
    } else {
      let max = this.traverse(this.root);
      return max;
    }
  }
} // closes BinaryTree Class

module.exports = BinaryTree;
