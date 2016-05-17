'use strict'
exports.solution = solution;

//mocha --grep CyclicRotation
//node-debug _mocha --grep CyclicRotation

// https://codility.com/demo/results/trainingZVFE9V-NTD/
function solution(A, K) {
    var res = [];
    K = K >= A.length ? K % A.length : K;
    for (var i = 0;i < A.length; i++) {
        var ind = i + K > A.length - 1 ? i + K - A.length : i + K;
        res[ind] = A[i];
    }

    return res;
}
