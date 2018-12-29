'use strict'
exports.solution = solution;

//mocha --grep CyclicRotation
//node-debug _mocha --grep CyclicRotation


// https://app.codility.com/demo/results/trainingA548QW-73J/
function solution(A, K) {

    for (let i = 1;i <= K; i++) {
        if(A[A.length - 1] || A[A.length - 1] === 0){
            A.unshift(A.pop());
        }
    }

    return A;
}

// https://codility.com/demo/results/trainingZVFE9V-NTD/
function solution1(A, K) {
    var res = [];
    K = K >= A.length ? K % A.length : K;
    for (var i = 0;i < A.length; i++) {
        var ind = i + K > A.length - 1 ? i + K - A.length : i + K;
        res[ind] = A[i];
    }

    return res;
}
