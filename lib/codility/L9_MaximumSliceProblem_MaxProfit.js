'use strict';
exports.solution = solution;

//mocha --grep MaxProfit
//node-debug _mocha --grep MaxProfit

//https://codility.com/demo/results/trainingUTPMVX-58C/
function solution(A) {
    var P = [];
    P[0] = 0;
    for (var i = 1;i < A.length; i++) {
        P[i] = A[i] - A[i - 1];
    }
    var max_e = 0,
        max_s = 0;
    for (i = 0;i < P.length; i++) {
        max_e = Math.max(0, max_e + P[i]);
        max_s = Math.max(max_s, max_e);
    }

    return max_s;

}
