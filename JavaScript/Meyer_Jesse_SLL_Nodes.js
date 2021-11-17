const { rangeContainsMarker } = require("../../../Coding/HTML JS CSS/fullcalendar-5.7.0/lib/main");

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null
    }

    // add node to front of list
    addFront(value) {
        // create new node
        var newNode = new Node(value);
        // connect new node to current head node
        newNode.next = this.head;
        // reassign current list's head to new node
        this.head = newNode;
        return this.head;
    }

    // remove node from front
    removeFront() {
        var list_head = this.head;
        if (this.size == 0) {
            return null;
        }
        this.head = list_head.next;
        if (this.size == 0) {
            return null;
        }
        return this.head;
    }
    // Get front Value
    front() {
        if (this.size == 0) {
            return null;
        }
        var list_head = this.head;
        return list_head.value;
    }
    
    //Check for Value
    contains(value) {
        var node = this.head;
        while (node != null) {
            if (node.value == value) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    //Check length of List
    length() {
        var runner = this.head;
        var i = 0;
        while (runner) {
            i++;
            runner = runner.next;
        }
        return i;
    }
    // display all values
    display() {
        var runner = this.head;
        var values = ""
        while (runner) {
            values = values + `${runner.value}, `
            runner = runner.next;
        }
        values = values.substring(0, values.length - 2);
        return values;
    }

    get_values() {
        var runner = this.head;
        var listArr = [];
        while (runner) {
            listArr.push(runner.value);
            runner = runner.next;
        }
        return listArr;
    }
    //return max value
    max() {
        var runner = this.head;
        var listArr = [];
        while (runner) {
            listArr.push(runner.value);
            runner = runner.next;
        }
        return Math.max(...listArr);
    }

    // return min value
    min() {
        var runner = this.head;
        var listArr = [];
        while (runner) {
            listArr.push(runner.value);
            runner = runner.next;
        }
        return Math.min(...listArr);
    }

    // return average
    average() {
        var runner = this.head;
        var listArr = [];
        while (runner) {
            listArr.push(runner.value);
            runner = runner.next;
        }
        return listArr.reduce((a, b)=> (a + b)) / listArr.length;
    }
}

var LinkedList = new SLL;
LinkedList.addFront(10);
LinkedList.addFront(20);
LinkedList.addFront(30);
console.log(LinkedList);
LinkedList.removeFront();
console.log(LinkedList);
console.log(LinkedList.front());
console.log(LinkedList.contains(10));
console.log(LinkedList.contains(40));
console.log(LinkedList.length());
console.log(LinkedList.display());
console.log(LinkedList.max());
console.log(LinkedList.min());
console.log(LinkedList.average());

// ===================================== SOLUTIONS =============================================

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }
// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     addFront(value) {
//         // Write a method that accepts a value and create a new node, 
//         // assign it to the list head, and return a pointer to the new head node.

//         // create a new node
//         var newNode = new Node(value);

//         // attach new node to existing list
//         newNode.next = this.head;

//         // reassign list's head
//         this.head = newNode;

//         // return the head
//         return this.head;
//     }

//     removeFront() {
//         //Write a method to remove the head node and return the new list head node. 
//         //If the list is empty, return null.
//         if(this.head) {
//             this.head = this.head.next;
//         }
//         return this.head;
//     }

//     front() {
//         // Write a method to return the value (not the node) at the head of the list. 
//         // If the list is empty, return null.
//         if(this.head) {
//             return this.head.value;
//         }
//         return null;    
//     }

//     contains(value) {
//         var runner = this.head;
//         while(runner) {
//             if(runner.value === value) {
//                 return true;
//             }
//             runner = runner.next;
//         }
//         return false;
//     }

//     length() {
//         var runner = this.head;
//         var numNodes = 0;
//         while(runner) {
//             numNodes++;
//             runner = runner.next;
//         }
//         return numNodes;
//     }

//     display() {
//         var output = "";
//         var runner = this.head;
//         while(runner) {
//             output += runner.value + " "
//             runner = runner.next;
//         }
//         return output;

//     }

//     display2() {
//         var output = "[";
//         var runner = this.head;
//         while(runner) {
//             output += runner.value;
//             if(runner.next) {
//                 output += ",";
//             }
//             runner = runner.next;
//         }
//         output += "]"
//         return output;

//     }

//     maxMinAvg() {
//         var sum = 0;
//         var max = this.head.value;
//         var min = this.head.value;
//         var runner = this.head;
//         while(runner) {
//             sum += runner.value;
//             if(runner.value > max) {
//                 max = runner.value;
//             }
//             else if(runner.value < min) {
//                 min = runner.value;
//             }
//             runner = runner.next
//         }
//         return `max: ${max}, min: ${min}, avg: ${sum/this.length()}`
//     }
// }