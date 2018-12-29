'use strict';

exports.solution = solution;

//mocha --grep OddOccurrencesInArray
//node-debug _mocha --grep OddOccurrencesInArray


//https://app.codility.com/demo/results/trainingQFDEC5-MG7/
function solution(A) {

    A.sort();
    for (let i = 0;i < A.length; i++) {
        let br = 1;
        while(A[i] === A[i + 1]) {
            i++;
            br++;
        }
        if(br%2 !== 0){
            return A[i];
        }
    }
    return A[A.length - 1];
}











//https://codility.com/demo/results/trainingFTFYGX-CFV/
//https://codility.com/demo/results/training2AQ267-XVE/
function solution2(A) {

    A.sort();

    for (var i = 0;i < A.length -1; i++) {
        var c = 1;
        while(A[i] === A[i + 1] && i < A.length - 1){
            c++;
            i++;
        }
        if(isOdd(c) || c===0){
            return A[i];
        }
    }

    return A[A.length - 1];
}

function solution1(A) {
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

exports.isOdd = isOdd;

function isOdd(num){
   return (num % 2) === 1;
}
