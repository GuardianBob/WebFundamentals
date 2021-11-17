// REMOVE VOWELS

// function disemvowel(str) {
//     return str.replace( /[aeiou]/ig, '');
// }

// console.log(disemvowel("No offense but,\nYour writing is among the worst I'v ever read"))

// =====================================================================================================

// DECODE MORSE CODE

// function decodeMorse(str) {
//     str
//         .split('   ')
//         .map(word => word 
//             .split(' ')
//             .map(letter => MORSE_CODE[letter])
//             .join('')
//             )
//             .join(' ')
//     return str
// }

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

// // Better Solution:

// decodeMorse = function(morseCode){
//     function decodeMorseLetter(letter) {
//         return MORSE_CODE[letter];
//     }
//     function decodeMorseWord(word) {
//         return word.split(' ').map(decodeMorseLetter).join('');
//     }
//     return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
// }

// =====================================================================================================

// FIND DUPLICATE CHARACTERS

function duplicateCount(text){
    try {return text.toLowerCase().split('').sort().join('').match(/(.)\1+/gi).length; }
    catch(e) {return 0;}
// ALTERNATIVE====================
// return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;

}

console.log(duplicateCount("aabBcde"))
