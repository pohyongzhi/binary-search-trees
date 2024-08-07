import { Node } from "./Node.mjs";

export class Tree {
    constructor(root) {
        this.root = root;
    }

    insert(value) {
        let currentNode = this.root;

        while (true) {
            if (value < currentNode.data) {
                if (currentNode.left === null) {
                    currentNode.left = new Node(value);
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = new Node(value);
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    delete(value) {
        let prevNode = this.root;
        let currentNode = this.root;

        while (currentNode !== null) {
            if (value === currentNode.data) {
                if (currentNode.left === null && currentNode.right === null) {
                    // First case: Delete a leaf
                    if (value < prevNode.data) {
                        prevNode.left = null;
                    } else {
                        prevNode.right = null;
                    }
                } else if (
                    currentNode.left === null &&
                    currentNode.right !== null
                ) {
                    // Second case: Only have right child
                    if (value < prevNode.data) {
                        prevNode.left = currentNode.right;
                    } else {
                        prevNode.right = currentNode.right;
                    }
                } else if (
                    currentNode.left !== null &&
                    currentNode.right === null
                ) {
                    // Second case: Only have left child
                    if (value < prevNode.data) {
                        prevNode.left = currentNode.left;
                    } else {
                        prevNode.right = currentNode.left;
                    }
                } else {
                    // Third case: Have both child
                    // Go to the right subtree from the target
                    const rightTree = currentNode.right;

                    // Keep moving left until you find the next smallest
                    let temp = rightTree;
                    let prevTemp = rightTree;
                    while (temp !== null) {
                        prevTemp = temp;
                        temp = temp.left;
                    }

                    // Replace the target with the next smallest value
                    currentNode.data = prevTemp.data;

                    // Connect the right node with the right node of prevTemp
                    rightTree.left = prevTemp.right;
                }
                return;
            }

            // Set the previous node
            prevNode = currentNode;

            // Continue the traversal
            if (value < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
    }

    find(value) {
        let currentNode = this.root;

        while (currentNode !== null) {
            if (currentNode.data === value) {
                return currentNode;
            }
            if (value < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return null;
    }

    levelOrder(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }
        const queue = [];

        queue.push(this.root);

        while (queue.length !== 0) {
            callback(queue[0]);
            if (queue[0].left !== null) {
                queue.push(queue[0].left);
            }
            if (queue[0].right !== null) {
                queue.push(queue[0].right);
            }
            queue.shift();
        }
    }

    inOrder(callback) {
        if (callback === undefined) {
            throw new Error("A callback is required");
        } else if (callback === null) {
            return;
        }

        // Traverse the left subtree
        this.inOrder(callback.left);

        // Visit the root
        console.log(callback.data);

        // Traverse the right subtree
        this.inOrder(callback.right);
    }

    preOrder(callback) {
        if (callback === undefined) {
            throw new Error("A callback is required");
        } else if (callback === null) {
            return;
        }
        // Visit the root
        console.log(callback.data);

        // Traverse the left subtree
        this.preOrder(callback.left);

        // Traverse the right subtree
        this.preOrder(callback.right);
    }

    postOrder(callback) {
        if (callback === undefined) {
            throw new Error("A callback is required");
        } else if (callback === null) {
            return;
        }

        // Traverse the left subtree
        this.postOrder(callback.left);

        // Traverse the right subtree
        this.postOrder(callback.right);

        // Visit the root
        console.log(callback.data);
    }
}

function cleanArray(array) {
    // Sort the array
    array.sort((a, b) => a - b);

    // Remove duplicates
    return [...new Set(array)];
}

function buildTree(arr, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);

    const root = new Node(arr[mid]);
    root.left = buildTree(arr, start, mid - 1);
    root.right = buildTree(arr, mid + 1, end);

    return root;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const arr = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14];
const cleanArr = cleanArray(arr);
const root = buildTree(cleanArr, 0, cleanArr.length - 1);
const tree = new Tree(root);

console.log(prettyPrint(tree.root));

// levelOrder test
// tree.levelOrder((node) => {
//     console.log(node.data);
// });

// inOrder test
// tree.inOrder(tree.root);
// tree.inOrder();

// preOrder test
// tree.preOrder(tree.root);

// postOrder test
tree.postOrder(tree.root);
