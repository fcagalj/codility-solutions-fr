'use strict'
exports.solution = solution;


//mocha --grep PermMissingElem
//node-debug _mocha --grep PermMissingElem

// https://app.codility.com/demo/results/trainingCFAC85-GQF/
function solution(A) {

    A.sort((a, b) => a - b);

    if(!A.length){
        return 1;
    }
    for (let i = 0;i < A.length; i++) {
        if(A[i] !== i + 1){
            return i + 1;
        }
    }
    return A.length + 1;
}





//https://codility.com/demo/results/trainingC5H2PM-3J2/
function solution1(A) {

    A.sort(function (a, b) {
        return a - b;
    });

    if(!A.length){
        return 1;
    }
    var i;
    for (i = 0;i < A.length; i++) {
        var a = A[i];
        if(A[i] !== i + 1){
            return i + 1;
        }
    }

    return i + 1;

}
