'use strict'
exports.solution = solution;


//mocha --grep PermMissingElem
//node-debug _mocha --grep PermMissingElem

//https://codility.com/demo/results/trainingC5H2PM-3J2/
function solution(A) {

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