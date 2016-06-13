'use strict';
exports.solution = solution;

//mocha --grep MaxSliceSum
//node-debug _mocha --grep MaxSliceSum

//https://codility.com/demo/results/trainingXV5WED-8W6/
function solution(A) {

    var max_e = A[0],
        max_s = A[0];
    for (var i = 1;i < A.length; i++) {
        max_e = Math.max(A[i], max_e + A[i]);
        max_s = Math.max(max_s, max_e);
    }

    return max_s;

}
