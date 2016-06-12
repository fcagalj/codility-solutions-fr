'use strict';
exports.solution = solution;

//mocha --grep MaximumSliceProblem_Example
//node-debug _mocha --grep MaximumSliceProblem_Example
function solution(A) {

    var P = prefix(A);
    console.log('P: ', A, P);
    var maxEnd = 0,
        maxS = 0;
    for (var i = 0;i < A.length; i++) {
        maxEnd = 0 > maxEnd + A[i] ? 0 : maxEnd + A[i];
        maxS = maxS > maxEnd ? maxS : maxEnd;

    }
    console.log('max ', maxS);
}

function solutionN2(A) {

    var P = prefix(A);
    console.log('P: ', A, P);
    var max = P[0];
    for (var i = 0;i < P.length; i++) {
        for (var j = i;j < P.length; j++) {
            if(max < P[j] - P[i]){
                max = P[j] - P[i];
            }
        }
    }
    console.log('max ', max);
}


function prefix(A) {
    var P = [];
    P[0] = 0;
    for (var i = 1; i <= A.length; i++) {
        P[i] = P[i - 1] + A[i - 1];
    }
    return P;
}

