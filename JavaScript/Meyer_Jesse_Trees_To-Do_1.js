class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // Add data
    add (data) {
        var newNode = new BTNode(data);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else  
            this.addNode(this.root, newNode);
            return this;        
    }

    addNode(node, newNode) {
        if(newNode.data < node.data) {
            if (node.left === null) 
                node.left = newNode;
            else 
                this.addNode(node.left, newNode);            
        } else {
            if (node.right === null) 
                node.right = newNode;
            else 
                this.addNode(node.right, newNode);            
        }
    }
    // Find Data
    contains(node, data) {
        if(node === null) 
            return null;
        else if (data < node.data) 
            return this.contains(node.left, data);
        else if (data > node.data) 
            return this.contains(node.right, data);
        else 
            return node;        
    }

    // Find smallest value
    min (node = this.root) {
        if (node.left === null) 
            return node;
        else 
            return this.min(node.left);        
    }

    // Find largest value
    max (node = this.root) {
        if (node.right === null)
            return node;                
        else 
            return this.max(node.right);  
    }

    // Find size of tree
    size(node = this.root){
        if(node === null) 
            return null;
        else
            return 1 + this.size(node.left) + this.size(node.right);    
    }

    isEmpty() {
        if (this.root === null ) 
            return true;        
    }

    get_all_nodes(node = this.root) {
        if (node === null) 
            return null;
        else 
            console.log(node);        

        this.get_all_nodes(node.left);
        this.get_all_nodes(node.right);
    }
    
    get_all_values(node = this.root){
        if (node === null) 
            return null;
        else 
            console.log(node.val);        

        this.get_all_values(node.left);
        this.get_all_values(node.right);
    }
}
    
let tree = new BST();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(20);
// console.log(tree);
// console.log(tree.size());
console.log(tree.get_all_values());



// =================  SOLUTIONS ==============================

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BST {
//     constructor() {
//         this.root = null;
//     }
//     // BST: ADD
//     add(value) {
//         if(this.root) {
//             var runner = this.root;
//             while(runner) {
//                 if(value>runner.value) {
//                     if(runner.right){
//                         runner = runner.right;
//                     } else {
//                         runner.right = new Node(value);
//                         return this
//                     }
//                 } else {
//                     if(runner.left){
//                         runner = runner.left;
//                     } else {
//                         runner.left = new Node(value);
//                         return this
//                     }
//                 }
//             }
//         }
//         this.root = new Node(value);
//         return this
//     }
//     contains(value) {
//         var runner = this.root;
//         while (runner) {
//             if (value == runner.value) {
//                 return true;
//             }
//             if (value < runner.value) {
//                 if (!runner.left) {
//                     return false;
//                 }
//                 runner = runner.left;
//             } else {
//                 if (!runner.right) {
//                     return false;
//                 }
//                 runner = runner.right;
//             }
//         }
//         return false;
//     }
//     min() {
//         var runner = this.root;
//         var min = this.root.value;
//         while(runner.left) {
//             if(runner.left.value < min) {
//                 min = runner.left.value;
//             }
//             runner = runner.left;
//         }
//         return min
//     }
//     max() {
//         var runner = this.root;
//         var max = this.root.value;
//         while(runner.right) {
//             if(runner.right.value > max) {
//                 max = runner.right.value;
//             }
//             runner = runner.right;
//         }
//         return max
//     }
//     size() {
//         if (this.root === null) {
//             return 0;
//         }
//         function sizeHelp(runner) {
//             if (!runner) {
//                 return 0;
//             }
//             return 1 + sizeHelp(runner.left) + sizeHelp(runner.right);
//         }
//         return sizeHelp(this.root);
//     }
//     isEmpty() {
//         if(this.root) {
//             return false
//         }
//         return true
//     }
// }
// // creating a new BST
// tree = new BST();

// // adding some nodes
// tree.add(10).add(20).add(5).add(7).add(21).add(2).add(9).add(17).add(6).add(4)

// // searching for value
// console.log(tree.contains(17))
// // searching for value that doesn't exist in the tree
// console.log(tree.contains('hello'))

// // testing min
// console.log(tree.min())
// // testing max
// console.log(tree.max())

// // testing size
// console.log(tree.size())

// //testing isEmpty
// console.log(tree.isEmpty())
// emptyTree = new BST();
// console.log(emptyTree.isEmpty())