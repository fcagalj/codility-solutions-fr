'use strict';
exports.solution = solution;
//mocha --grep PassingCars
//node-debug _mocha --grep PassingCars
//https://codility.com/demo/results/training6MSD5M-V7H/
function solution(A) {
    var P = prefix(A);
    var result = 0;
    for (var i = 0; i < A.length; i++) {
        if (result > 1000000000) {
            return -1;
        }
        if (A[i] === 0) {
          result+= P[A.length] - P[i];
        }
    }
    return result;
}

function prefix(A) {
    var P = [];
    P[0] = 0;
    for (var i = 1; i <= A.length; i++) {
        P[i] = P[i - 1] + A[i - 1];
    }
    return P;
}
