const list = [21, 44, 200, 1, 7, 18, 21];

function sortTree(list) {
    let left = [];
    let right = [];

    for (let i = 0; i < list.length; i++) {
    
        if (list[i] < list[i-1]) {
            left.push(list[i]);

        } else if (list[i] > list[i-1]) {
            right.push(list[i])
        }
    }

    console.log(left);
    console.log(right);
    console.log('/n---/n');

    return left.concat(right);
}


function tree(list) {
    let tree = list;

    // for (let i = 0; i <= list.length; i++) {
    //     tree = sortTree(tree);
    // }

    tree = sortTree(tree);

    return tree;
}

const binaryTree = tree(list);

// console.log(list);
// console.log(binaryTree);
console.log("---");





