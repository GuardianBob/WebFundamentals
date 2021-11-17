// Recursive Binary Search
function rBinarySearch(arr, num) {
    let half = Math.floor(arr.length / 2);
    //stop if array only has 1 element and doesn't match.
    if (arr.length === 1 && arr[0] != num) {
        return false;
    }
    if (num === arr[half]) {
        return true;
    } else if (num < arr[half]) {
        var new_arr = arr.slice(0, half);
        return rBinarySearch(new_arr, num);
    } else if (num > arr[half]) {
        var new_arr = arr.slice(half);
        return rBinarySearch(new_arr, num);
    }
}
var arr1 = [1,3,5,6]
var arr2 = [4,5,6,8,12]
console.log(rBinarySearch(arr1, 4))
console.log(rBinarySearch(arr2, 5))

// Greatest Common Factor
function rGCF(num1, num2) {
    if ( ! num2) {
        return num1;
    }
    // console.log(num1 % num2);
    return rGCF(num2, num1 % num2);
}

console.log(rGCF(123456, 987654));

// ====================== SOLUTIONS ===============================

// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 
// rBinarySearch([1,3,5,6],4) = false; 
// rBinarySearch([4,5,6,8,12],5) = true.

function rBinarySearch2(arr, value) {
    var mid = Math.floor(arr.length/2);
    if(arr[mid] == value) {
        return true;
    }
    else if(value < arr[mid] && arr.length > 1) {
        return rBinarySearch2(arr.slice(0, mid), value);
    }
    else if(value > arr[mid] && arr.length > 1) {
        return rBinarySearch2(arr.slice(mid, arr.length), value)
    } else {
        return false
    }
}

console.log(rBinarySearch2([1, 3, 5, 6], 4));
console.log(rBinarySearch2([4, 5, 6, 8, 12], 5));

// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

function rGCF2(param1, param2) {
    if (param1 == param2) {
        return param1;
    }
    if (param1 > param2) {
        return rGCF2(param1-param2, param2);
    }
    if (param1 < param2) {
        return rGCF2(param1, param2-param1);
    }
}

console.log(rGCF2(3, 7));   
console.log(rGCF2(18, 27)); 
console.log(rGCF2(49, 14)); 

function GCF(param1, param2) {
    if (param1 == param2) {
        return param1;
    }
    if (param1 > param2) {
        if ((param1/param2) % 1 === 0) {
            return param2;
        } else {
            return GCF(param1-param2, param2);
        }
    }
    if (param1 < param2) {
        if ((param1/param2) % 1 === 0) {
            return param2;
        } else {
            return GCF(param1, param2-param1);
        }
    }
}
console.log(GCF(123456, 987654));