//Get 1 to 255
function to255() {
    var x = [];
    for(i = 1; i < 255; i++){
        x.push(i)
    }
    return x;
}

var y = to255();
console.log("get 1 to 255: ", y);

//Get even 1000
function even1000() {
    var i = 1;
    var j = 0;
    while(i < 1000) {
        if (i % 2 == 0) {
            j = j + i;                        
        }        
        i++;
    }
    return j;
}

var evn = even1000();
console.log("Sum even to 1000: ", evn);

//Sum odd 5000
function odd5000() {
    var i = 1;
    var j = 0;
    while(i < 5000) {
        if (i % 2 != 0) {
            j = j + i;                        
        }        
        i++;
    }
    return j;
}

var odd1 = odd5000();
console.log("Sum Odd to 5000: ", odd1);

//Iterate an Array
function sumArr(arr1) {
    var sum1 = 0;
    for(i = 0; i < arr1.length; i++) {
        sum1 = sum1 + arr1[i];
    }    
    return sum1;
}

var sumA = [1, 2, 3, 4, 5];
var sumB = sumArr(sumA);
console.log("Iterate an Array: ", sumB);

//Find Max
function findMax(arr1) {
    var max = Math.max(...arr1);
    console.log("max: ", max);
    return max;
}

//Find Min
function findMin(arr1) {
    var min = Math.min(...arr1);
    return min;
}

var grp1 = [4, 12, 5, 9, 15, 3];
var mx1 = findMax(grp1);
console.log("Find Max", mx1);

//Find Average
function findAvg(arr1) {
    var sum1 = 0;
    for(i = 0; i < arr1.length; i++) {
        sum1 = sum1 + arr1[i];
    }    
    var avg2 = sum1 / arr1.length;
    return avg2;
}

var grp2 = [5, 4, 5, 2];
var avg1 = findAvg(grp2);
console.log("Find Average: ", avg1);

//Array Odd
function oddArr() {
    var oArr = [];
    for(i = 1; i <= 50; i++){
        if(i % 2 != 0) {
            oArr.push(i);
        }
    }
    return oArr;
}

var oArr2 = oddArr();
console.log("All odds between 1 and 50: ", oArr2);

//Greater than Y
function grtrThan(y, arr1) {
    arr2 = [];
    for(i = 0; i < arr1.length; i++){
        if(arr1[i] > y) {
            arr2.push(arr1[i]);
        }
    }
    return arr2;
}

var grp3 = [3, 14, 45, 13, 6, 18];
var y1 = 10;
var grp4 = grtrThan(y1, grp3);
console.log("Greater than ", y1, ": ", grp4);

//Squares
function sqrArr(arr1) {
    for (i = 0; i < arr1.length; i++){
        arr1[i] = arr1[i] * arr1[i];
    }
    return arr1;
}

var grp5 = [1, 2, 3, 4, 5];
var grp5sq = sqrArr(grp5);
console.log("Squares of Array: ", grp5sq);

//Negatives
function rmvNeg(arr1) {
    for (i = 0; i < arr1.length; i++){
        if(arr1[i] < 0){
            arr1[i] = 0;
        }
    }
    return arr1;
}

var grp6 = [1, -2, 3, -4, 5];
var grp6neg = rmvNeg(grp6);
console.log("Remove Negatives: ", grp6neg);

//Max/Min/Avg
function maxMinAvg(arr1){
    var arr2 = [];
    arr2.push(findAvg(arr1));
    arr2.push(findMax(arr1));
    arr2.push(findMin(arr1));
    return arr2;
}

var grp7 = maxMinAvg([1,2,3,4,5]);
console.log("Max, Min, and Average fo Array: ", grp7);

//Number to String
function num2str(arr1) {
    for (i = 0; i < arr1.length; i++){
        if(arr1[i] < 0){
            arr1[i] = "Dojo";
        }
    }
    return arr1;
}

var arr3 = [-10, 5, 8, -2, 7];
var nmStr = num2str(arr3);
console.log("Number to string: ", nmStr);