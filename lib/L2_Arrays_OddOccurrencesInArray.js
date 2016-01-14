'use strict'
exports.solution = solution;

//https://codility.com/demo/results/trainingFTFYGX-CFV/
function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    A.sort();
    var odd = true;
    //console.log(A);
    for (var i = 1; i < A.length; i++) {
        if (A[i] !== A[i - 1]) {
            //console.log('%s[%s] changing: odd=%s', A[i], i, odd);
            if (odd) {
                return A[i - 1];
            }
            odd = true;
        } else {
            odd = !odd;
            //console.log('%s[%s] counter++: odd=%s', A[i], i, odd);
        }
    }
    return A[A.length - 1];
}

exports.isOdd = function isOdd(num){
   return (num % 2) === 1;
};
