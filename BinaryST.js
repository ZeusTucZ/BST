class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        const newNode = new Node(key);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let curr = this.root;
        while (true) {
            if (key > curr.key) {
                if (!curr.right) {
                    curr.right = newNode;
                    return;
                }
                curr = curr.right;
            } else {
                if (!curr.left) {
                    curr.left = newNode;
                    return;
                }
                curr = curr.left;
            }
        }
    }

    search(key) {
        let curr = this.root;

        while (curr) {
            if (key > curr.right) {
                curr = curr.right;
            } else if (key < curr.left) {
                curr = curr.left;
            } else {
                return true;
            }
        }

        return false;
    }
}

const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(25);
bst.insert(75);
console.log(bst.search(100));
console.log(bst);