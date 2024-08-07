import { Tree, cleanArray, buildTree, prettyPrint } from "./Tree.mjs";

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
// tree.postOrder(tree.root);

// height test
// console.log(tree.height(tree.find(7)));

// depth test
// console.log(tree.depth(tree.find(8)));

// isBalance test
// console.log(tree.isBalanced());

// rebalance test
// tree.rebalance();

// console.log(prettyPrint(tree.root));
