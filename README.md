# Tree Data Structure

## Overview

This project provides an implementation of a binary tree data structure in JavaScript. It includes methods for inserting, deleting, finding nodes, and performing tree traversals.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/pohyongzhi/binary-search-trees.git
    ```

2. Import the `Tree` and `Node` classes into your project:

    ```javascript
    import { Tree } from "./Tree.mjs";
    import { Node } from "./Node.mjs";
    ```

## Usage

Here’s how to use the `Tree` class:

```javascript
import { Tree } from "./Tree.mjs";
import { Node } from "./Node.mjs";

// Create a new tree with a root node
const root = new Node(10);
const tree = new Tree(root);

// Insert values
tree.insert(5);
tree.insert(15);

// Delete a value
tree.delete(5);

// Find a node
const node = tree.find(15);
console.log(node.data); // Output: 15

// Print tree using different traversals
tree.levelOrder((node) => console.log(node.data));
tree.inOrder((node) => console.log(node.data));
tree.preOrder((node) => console.log(node.data));
tree.postOrder((node) => console.log(node.data));

// Check if the tree is balanced
console.log(tree.isBalanced());

// Rebalance the tree
tree.rebalance();

// Print the tree structure
prettyPrint(tree.root);

// Get the height of a node
const height = tree.height(node);
console.log(height);

// Get the depth of a node
const depth = tree.depth(node);
console.log(depth);
```

## Helper Functions

### `cleanArray(array)`

Sorts and removes duplicates from the array.

**Parameters:**

-   `array` (Array): The array to be cleaned.

**Returns:**

-   (Array): The sorted and cleaned array.

**Example:**

```javascript
const cleanedArray = cleanArray([10, 5, 15, 5]);
console.log(cleanedArray); // Output: [5, 10, 15]
```

### `buildTree(arr, start, end)`

Builds a balanced binary tree from a sorted array.

**Parameters:**

-   `arr` (Array): The sorted array of values.
-   `start` (Number): The starting index of the array segment.
-   `end` (Number): The ending index of the array segment.

**Returns:**

-   (Node): The root node of the balanced binary tree.

**Example:**

```javascript
import { buildTree } from "./Tree.mjs";
import { Node } from "./Node.mjs";

const arr = [1, 2, 3, 4, 5, 6, 7];
const balancedTree = buildTree(arr, 0, arr.length - 1);
console.log(balancedTree);
```

### `prettyPrint(node, prefix = "", isLeft = true)`

Prints the tree structure in a readable format.

**Parameters:**

-   `node` (Node): The root node of the tree to print.
-   `prefix` (String, optional): The prefix for the current node. Used for formatting the tree structure.
-   `isLeft` (Boolean, optional): Indicates if the current node is a left child. Helps in formatting the output.

**Example:**

```javascript
import { prettyPrint } from "./Tree.mjs";
import { Node } from "./Node.mjs";

// Create a tree
const root = new Node(10);
const tree = new Tree(root);
tree.insert(5);
tree.insert(15);

// Print the tree structure
prettyPrint(tree.root);
```
