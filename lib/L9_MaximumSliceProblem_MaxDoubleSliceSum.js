'use strict';
exports.solution = solution;

//mocha --grep MaxDoubleSliceSum
//node-debug _mocha --grep MaxDoubleSliceSum

//https://codility.com/demo/results/trainingV74TBV-3BM/
function solution(A) {
    var L = [],
        D = [];

    // must be set to 0, and not to Math.max(0, A[0])
    // because we calculating max endings of slice
    // that have at least two members. Otherwise double
    // slice wouldnt exist by definition.
    L[0] = 0;
    D[A.length - 1] = 0;

    for (var i = 1;i < A.length; i++) {
        L[i] = Math.max(0, L[i-1] + A[i]);
    }

    for (i = A.length - 2;i >= 0; i--) {
        D[i] = Math.max(0, D[i + 1] + A[i]);
    }
    var max = 0;

    for (var i = 1;i < L.length - 1; i++) {
        max = Math.max(max, L[i - 1] + D[i + 1]);
    }

    return max;
}
