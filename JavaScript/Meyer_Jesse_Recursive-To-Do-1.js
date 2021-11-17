function rSigma(num){    
    num = parseInt(num);
    if(num >= 1){
        return rSigma(num-1) + num;
    };
    return 0;
};

console.log(rSigma(2.5));

function rFact(num){
    num = parseInt(num);
    if(num > 1) {
        return rFact(num-1) * num;
    };
    return 1;
};

console.log(rFact(6.5));

// =====================================SOLUTION =======================================

// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

// function rSigma(num) {
//     if(num > 0) {
//         return rSigma(num-1) + num;
//     }
//     return 0
// }

// console.log(rSigma(6))

// // Recursive Factorial
// // Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

// function rFact(num) {
//     num = parseInt(num);
//     if(num > 1) {
//         return rFact(num-1) * num;
//     }
//     return 1
// }

// console.log(rFact(6.5))

///// Simple function to kick off the recursive version, with default
// values for the number of opens pending (0), the substring fragment
// we've built so far (""), and the array of complete solutions ([]).
function allValidNParens(numParens) {
    var solutions = [];
    rValidNParens(numParens, 0, "", solutions);
    return solutions;
}
///// Recursive All-Valid-Combinations-Of-N-Pairs-Parentheses func.
// Parameters: number of parens remaining, number of opens pending,
// unfinished substring fragment we're building, array of solutions
function rValidNParens(parens, opens, subStr, solutions) {
    // If no parens/opens remain, this fragment is a valid solution.
    if (!parens && !opens) {
        solutions.push(subStr);
    }
    // If opens remain, one option is to close one.
    if (opens) {
        rValidNParens(parens, opens-1, subStr + ")", solutions);
    }
    // If unused parens remain, one option is to open a new one.
    if (parens) {
        rValidNParens(parens-1, opens+1, subStr + "(", solutions);
    }
    // solutions array is a 'live' obj; we don't need to return it.
}
    
console.log(allValidNParens(1))