var myArr = [1, 2, 3, 4]

// Push Front
function pushFront(arr, item) {
    var tmp = [item]
    for(i = 1; i <= arr.length; i++){
        tmp[i] = arr[i-1]
    }
    arr = tmp
    return arr; 
}

pushFront(myArr, 0)

// Pop Front
function popFront(arr) {
    var first = arr[0]
    var tmp = []
    for(i = 1; i < arr.length; i++) {
        tmp[i-1] = arr[i]        
    }
    return tmp;
}

popFront(myArr)

//Insert At
function insertAt(arr, loc, item) {        
    for(var i = arr.length; i > loc; i--){                
        arr[i] = arr[i-1]
    };
    arr[loc] = item;
    return arr;
};

insertAt(myArr, 1, 3)

// Remove At
function removeAt(arr, loc) {
    tmp = []
    for (var i = 0; i < arr.length; i++) {
        if(i != loc) {
            tmp.push(arr[i]);
        }      
    };
    return tmp;
};

removeAt(myArr, 1);

// Swap Pairs
function swapPairs (arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
            tmp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = tmp
    }
    return arr;
}

swapPairs(myArr);

// Remove Duplicates
function rmvDupes(arr) {
    tmp = []
    for (i = 0; i < arr.length; i++){
        if (arr[i] != arr[i + 1]) {
            tmp.push(arr[i])
        }
    }
    return tmp;
}

rmvDupes([1, 1, 2, 3, 3, 3, 4, 4, 5, 6, 6])

// Remove Duplicates - pt 2
// See above.