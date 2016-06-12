'use strict';
exports.solution = solution;

//mocha --grep MaxDoubleSliceSum
//node-debug _mocha --grep MaxDoubleSliceSum
function solution(A) {
    var L = [],
        D = [];

    //L[0] = A[0];
    //D[A.length - 1] = A[A.length - 1];

    for (var i = 1;i < A.length - 1; i++) {
        L[i] = Math.max(0, L[i-1] + A[i]);
    }

    for (i = A.length - 1;i > 0; i--) {
        D[i] = Math.max(0, D[i + 1] + A[i]);
    }
    var max = 0;

    for (var i = 1;i < L.length - 1; i++) {
        max = Math.max(max, L[i - 1] + D[i + 1]);
    }

    return max;
}
