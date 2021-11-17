myArr = [1, 2, 3, 4, 5, 6]
myArr2 = ['a', 'b', 'c']
myArr3 = [7, 8, 9]

// Reverse - Given a numerical attay, reverse the order of values, in-place.

function reverse(arr) {
    len = arr.length - 1;
    for(i = 0; i < (len/2); i ++) {
        tmp = arr[len - i];
        arr[len - i] = arr[i];
        arr[i] = tmp;
    }    
    return arr
}

console.log(reverse(myArr))

//Rotate - Implement rotateArr(arr, shiftBy) that accepts an array and offset. Shift the arr values to the right by the shiftBy amount
// allow negative shiftBy
// minimize memory usage - no new array
// minimize touches of each element

function rotateArr(arr, shiftBy) {
    len = arr.length - 1;    
    if (shiftBy < 0){
        negShift = shiftBy * -1
        for (j = 0; j < negShift; j++){
            arr.push(arr[0])
            arr.shift()
        }
    }else{
        for (j = 0; j < shiftBy; j++){
            arr.unshift(arr[len])
            arr.pop()
        }
    }
    return arr
}

console.log(rotateArr(myArr, 2))
console.log(rotateArr(myArr, -3))

// Filter Range - keep only values in array between given range
function filterRange(arr, min, max){
    for (i = arr.length - 1; i >=0; i--){
        if(arr[i] <= min || arr[i] >= max){
            arr.splice(i, 1);
        }
    }
    return arr
} 

console.log(filterRange(myArr, 2, 5))

function arrConcat(arr1, arr2){
    retArr = []
    arr1.forEach((item)=>{
        retArr.push(item);
    });
    arr2.forEach((item)=>{
        retArr.push(item);
    });
    return retArr
}

console.log(arrConcat(myArr, myArr3))



// ================== SOLUTIONS ==============================
function reverse(arr) {
    // loop through half of the array
    for(var i=0; i<arr.length/2; i++) {
        // swap values across midpoint
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}

function rotate(arr, shiftBy) {
	let t = Math.abs(shiftBy);
	while(t > 0) {

		if(shiftBy > 0) {
			let temp = arr[arr.length-1]
			
			for(let i = arr.length - 1; i > 0; i--)
				arr[i] = arr[i-1];
			arr[0] = temp;

		} else {
			let temp = arr[0];
			for(let i = 0; i < arr.length - 1; i++) {
				arr[i] = arr[i + 1];
			}
			arr[arr.length-1] = temp;
		}
		t--;
	}
}

function filterRange(arr, min, max) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > min && arr[i] < max) {
			for(let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;
			i--;
		}
	}
}