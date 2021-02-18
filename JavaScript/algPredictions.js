
function predict1() {
    for(var num = 0; num < 15; num++) {     // num increases by 1 each time up to 15
        console.log(num);
    }
}
// Output will be: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
console.log("1st Algorithm:");
predict1();

function predict2() {
    for(var i = 1; i < 10; i+=2){           // i increases by 2 each time up to 10
        if(i % 3 == 0){                     // i must be divisble by 3 to output
            console.log(i);
        }
    }
}
//Output will be: 3, 9
console.log("2nd Algorithm:");
predict2();

function predict3() {
    for(var j = 1; j <= 15; j++){           // j increases by 1 each time up to 16 
        if(j % 2 == 0){                     // j must be divisible by 2
            j+=2;                           // j increases by 2
        }
        else if(j % 3 == 0){                // j must be divisible by 3
            j++;                            // j increases by 1
        }
        console.log(j);
    }
}
//Output will be: 4, 7, 10, 14, 16
// Messed this one up, calculated it as if the console.log was inside the if statement.
//Actual output: 1, 4, 5, 8, 10, 11, 14, 16
console.log("3rd Algorithm:");
predict3();