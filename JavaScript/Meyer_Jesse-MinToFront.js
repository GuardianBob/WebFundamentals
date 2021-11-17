myArr = [4, 2, 1, 3, 5]

function minToFront(arr) {
    for (i = 0; i < arr.length; i ++){
        for(j = i + 1; j < arr.length; j ++) {
            if(arr[i] > arr[j]){
                var tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr;
}

arr2 = minToFront(myArr);
console.log(arr2)

// ========================================= Solution ==============================================
function minToFront(arr) {
    var min = arr[0];
    var idx = 0;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            idx = i;
        }
    }
    for (var x = idx; x > 0; x--){
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}