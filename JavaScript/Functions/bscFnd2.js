// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
var arr1 = [];
var arr2 = [];

function replPos(x, arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = x;
        }
    }
    return arr;
}

arr1 = [-1, 3, 5, -5];
arr2 = replPos("big", arr1);
console.log("Biggie Size: ", arr2);

// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

//Find Min and Max
function findMinMax(arr) {
    var max = arr[0];  
    var min = arr[0];   
    for (var i = 0; i < arr.length; i++){ 
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i];
        }
    }
    return [min, max];
}

var mmax = findMinMax([1, 2, 3, 4, 5]);
console.log("Min and Max: ", mmax);

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function prntRtrn(arr) {
    console.log("2nd to last: ", arr[arr.length-2]);
    var i = 0
    while (arr[i] % 2 == 0){
        i++;
    }
    return arr[i];
}

arr1 = [2, 4, 6, 10, 15, 12, 16];
var scnd = prntRtrn(arr1);
console.log("First Odd: ", scnd);

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function dbl(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }
    return arr;
}

arr1 = [2, 4, 6, 8, 10];
arr2 = dbl(arr1);
console.log("Doubled numbers in array: ", arr2);

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function rplLst(arr){
    var cnt = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            cnt++;
        }
    }
    arr[arr.length-1] = cnt;  //or arr.pop();  arr.push(cnt);
    return arr;
}

arr1 = [-1,1,1,1];
arr2 = rplLst(arr1);
console.log("Updated array with pos count: ", arr2);

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function cntOddEv(arr){
    var x, y = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            x++;
            y = 0;
            if(x >= 3){
                console.log("Even More So!")
                x = 0;
            }            
        } else {
            y++;
            x = 0;
            if(y >= 3){
                console.log("That's odd!")
                y = 0;
            }
        }                
    }
}

arr1 = [1, 2, 2, 2, 3, 5, 7, 2, 5, 3, 1];
cntOddEv(arr1);

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function incr1(arr){
    for (var i = 1; i < arr.length; i += 2){
        arr[i] = arr[i] + 1;
    }
    return arr;
}

arr1 = [1, 2, 3, 4, 5, 6];
arr2 = incr1(arr1);
console.log("Increase every other: ", arr2);

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function cntStr(arr){
    var j = arr.length - 2;
    for (var i = arr.length-1; i > 0; i--){
        arr[i] = arr[j].length;
        j--;
    }
    return arr;
}

arr1 = ["hello", "dojo", "awesome"];
arr2 = cntStr(arr1);
console.log("Previous Lengths: ", arr2);


// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSev(arr){
    for (var i = 0; i < arr.length; i ++){
        arr[i] = arr[i] + 7;
    }
    return arr;
}

arr1 = [1,2,3];
arr2 = addSev(arr1);
console.log("Add 7: ", arr2);

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function rvrs(arr){
    var arrR = [];
    for (var i = arr.length-1; i >= 0; i--){
        arrR.push(arr[i]);
    }
    return arrR;
}

arr1 = [1,2,3,4,5];
arr2 = rvrs(arr1);
console.log("Reverse: ", arr2);

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function allNeg(arr) {
    for (i = 0; i < arr.length; i++){
        arr[i] = Math.abs(arr[i]) * -1;
    }
    return arr;
}

arr1 = [1, -2, 3, -4, 5];
arr2 = allNeg(arr1);
console.log("All Negatives: ", arr2);

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function yummy(arr){
    var j = 0;
    for (i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            j++
        }
    }
    if (j == 0){
        console.log("I'm hungry");
    }
}

yummy(["food", "blank", "food", "blank"]);

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swap1(arr){
    var j = arr.length - 1;
    var arrA = arr;
    i = 0;
    while (i < j){       
        var x = arr[i]; var y = arr[j];    
        arrA[j] = x; arrA[i] = y;          
        i+=2; j-=2;      
    }
    return arrA;
}

arr1 = [1, 2, 3, 4, 5, 6];
arr2 = swap1(arr1);
console.log("Swapped End to End: ", arr2);

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaled(arr, x){
    for (i = 0; i < arr.length; i++){
        arr[i] = arr[i] * x;
    }
    return arr;
}

arr1 = [1, 2, 3, 4, 5, 6];
arr2 = scaled(arr1, 3);
console.log("Scaled: ", arr2);