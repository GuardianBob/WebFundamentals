

function removeBlanks(str){
    new_str = str.split(" ").join("");
    return new_str
}
myStr = " Pl ayTha tF u nkyM usi c "
// console.log(removeBlanks(myStr))

function getDigits(str){
    new_str = str.replace(/\D/g, "");
    return new_str
}

myStr =  "0s1a3y5w7h9a2t4?6!8?0"
// console.log(getDigits(myStr))

function countNonSpace(str){
    new_str = str.split(" ").join("");
    return new_str.length;
}

myStr = "Honey pie, you are driving me crazy"
// console.log(countNonSpace(myStr))

function removeShorter(arr, length){
    arr.forEach((item, index)=>{
        if(item.length < length){
            arr.splice(index, 1);
        }
    })
    return arr
}

myArr = ["if", "and", "there", "is", "the"]
console.log(removeShorter(myArr, 3))

// ======================= Solutions =================================

// Remove Blanks

function removeBlanks(str) {
    return str.split(" ").join("");
}

// Get Digits

function getDigits(str) {
    var stringArr = str.split("");
    var intStr = "";
    for (var ind = 0; ind < stringArr.length; ind++) {
        if (stringArr[ind]%1 == 0) {
            intStr += stringArr[ind];
        }
    }
    return intStr/1;
}

// Acronyms

function acronyms(str) {
    var strArr = str.split(" ");
    var retStr = "";
    for (var ind = 0; ind < strArr.length; ind++) {
        if (strArr[ind] == false) {
            continue;
        } else {
            retStr += strArr[ind][0].toUpperCase();
        }
    }
    return retStr;
}

// Count Non-Spaces

function countNS(str) {
    var strArr = str.split("");
    var count = 0;
    for (var ind = 0; ind < strArr.length; ind++) {
        if (strArr[ind] == false) {
            continue;
        } else {
            count++;
        }
    }
    return count;
}

// Remove Shorter Strings

function removeShort(strArr, val) {
    for (var ind = strArr.length-1; ind >= 0; ind--) {
        if (strArr[ind].length < val) {
            for (var i = ind; i < strArr.length-1; i++){
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}