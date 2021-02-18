function printOdd() {
    for(var i = 1; i < 20; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

console.log("Print Odd Numbers:");
printOdd();

function sumNums() {
    var i = 1;
    var j = 0;
    while(i <= 5) {
        console.log("Num: ", i);
        j += i;
        console.log("Sum: ", j);
        i++;        
    }
}

console.log("Print Sum 1-5:");
sumNums();

//Shorter Code from CodingDojo:
// print odds
for(let i=0; i<20; i++){
    if(i % 2 !== 0)
    console.log(i);
}

// num and sum
var sum=0;
for(let i=0; i<5; i++){
    sum+=i
    console.log('num:', i, 'sum:', sum)
}