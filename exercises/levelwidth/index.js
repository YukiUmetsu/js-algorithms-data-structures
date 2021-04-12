// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counterArr = [0];
    const queue = [root, 's'];
    while(queue.length > 1) {
        const node = queue.shift();
        if (node === 's') {
            counterArr.push(0);
            queue.push(node);
            continue;
        }
        if (node.children.length) {
            queue.push(...node.children);
        }
        const counterLastIndex = counterArr.length - 1;
        counterArr[counterLastIndex] = counterArr[counterLastIndex] + 1;
    }
    return counterArr;
}

module.exports = levelWidth;
