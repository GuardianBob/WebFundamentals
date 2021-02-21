function greeting(){
        return "Hello";
        console.log("World");
}

var word = greeting();
console.log(word);
//Output: "Hello"

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//   Output: Summing Numbers!
//           num1 is: 3
//           num2 is: 5
//           8
//           Summing Numbers!
//           num1 is: 4
//           num2 is: 7
//           11
//  Actual Output: 8 & 11 were last, I forgot to account for the results being loged after the function was run for both.  

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

//  Output:  No output, the function is not called so nothing happens.
//           If the function wer to be called it would display i starting from 0 up to the value of num increasing by 1 and "High Five!" if i = 5 