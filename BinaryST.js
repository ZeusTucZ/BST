export class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
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
            if (key > curr.key) {
                curr = curr.right;
            } else if (key < curr.key) {
                curr = curr.left;
            } else {
                return true;
            }
        }

        return false;
    }

    preorder(node) {
        if (node == null) {
            return;
        }
        console.log(node.key)
        this.preorder(node.left)
        this.preorder(node.right)
    }

    min_value(current_node){
        while (current_node.left !== null){
            current_node = current_node.left;
        }
        return current_node.key;
    }

    __remove_node(current_node, value){
        if (current_node == null){
            return null;
        }
        if (value < current_node.key){
            current_node.left = this.__remove_node(current_node.left, value);
        }
        else if (value > current_node.key){
            current_node.right = this.__remove_node(current_node.right, value);
        }
        else{
            // Caso 1: sin hijos
            if(current_node.left == null && current_node.right == null){
                return null;
            }
            // Caso 2: un solo hijo
            else if(current_node.left == null){
                current_node = current_node.right;
            }
            else if(current_node.right == null){
                current_node = current_node.left;
            }
            // Caso 3: dos hijos
            else{
                const sub_tree_min = this.min_value(current_node.right);
                current_node.key = sub_tree_min;
                current_node.right = this.__remove_node(current_node.right, sub_tree_min);
            }
        }
        return current_node;
    }

    remove_node(value){
        this.root = this.__remove_node(this.root, value);
    }

    display() {
        console.log(this.inOrder().join(" "));
    }
}