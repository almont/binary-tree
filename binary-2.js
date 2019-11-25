
class Node {
    constructor(data = null, root = null) {
        this.data = data;
        this.root = root;
        this.left = null;
        this.right = null;
    }

    addLeft(node) {
        this.left = node;
    }

    addRight(node) {
        this.right = node;
    }

    values() {
        return {
            data: this.data,
            root: this.root,
            left: this.left,
            right: this.right
        }
    }
}

const node1 = new Node(10);



const node2 = new Node(5);



// console.log(node);
console.log(node1.values());
console.log(node2.values());

node1.addLeft(node2);

console.log(node1.values());
console.log(node2.values());




/*
const list = [21, 44, 200, 1, 7, 18, 21];





function tree(list) {
    let tree = [];

    for (let i = 0; i < list.length; i++) {
    
        if (list[i] < list[i-1]) {
            tree.push(list[i]);

        } else if (list[i] > list[i-1]) {
            tree.push(list[i])
        }
        
    }

    return tree;
}


const binaryTree = tree(list);

console.log(list);
console.log(binaryTree);
console.log(list[-1])
*/