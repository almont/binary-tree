
class Node {
    constructor(value = null) {
        this.value = value;
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
            value: this.value,
            left: this.left,
            right: this.right
        }
    }
}



class Tree {
    constructor() {
        this.root = null;
    }

    addNode(value, node = this.root) {

        // Building root first node
        if (this.root === null) {
            const rootNode = new Node(value);
            this.root = rootNode;
            return;

        // Creating tree
        } else {

            // Left node
            if (value < node.value) {

                // Add new node to left
                if (node.left === null) {
                    const newNode = new Node(value);
                    node.left = newNode;
                    return;

                // Creating new node to left
                } else {
                    this.addNode(value, node.left);
                    return;
                }

            // Right node
            } else if (value > node.value) {

                // Add new node to right
                if (node.right === null) {
                    const newNode = new Node(value);
                    node.right = newNode;
                    return;
                
                // Creating new node to right
                } else {
                    this.addNode(value, node.right);
                    return;
                }
            }
        }
    }
}



let list = [400, 21, 44, 100, 1, 7, 18, 21, 36, -1, -30, - 456];
// Shuffling for tests
list = list.sort(function() {return .5 - Math.random();});

console.log(list);



const tree = new Tree();

for (let i = 0; i < list.length; i++) {
    tree.addNode(list[i]);    
}

console.log(tree.root);
