'use strict';
exports.solution = solution;
//mocha --grep EquiLeader
//node-debug _mocha --grep EquiLeader
//https://codility.com/demo/results/trainingW3YEBE-3UN/
function solution(A) {
    var value,
        size = 0;
    for (var i = 0; i < A.length; i++) {
        if (size === 0) {
            value = A[i];
            size++;
        } else if (A[i] === value) {
            size++;
        } else if (A[i] !== value) {
            size--;
        }
    }
    if (size <= 0) {
        return 0;
    }
    var countLeaders = 0;
    for (var j = 0; j < A.length; j++) {
        if (A[j] === value) {
            countLeaders++;
        }
    }
    if (countLeaders <= A.length / 2) {
        return 0;
    }
    var restLeaders = countLeaders,
        leaders = 0,
        equiLeaders = 0;
    for (var k = 0; k < A.length; k++) {
        if (A[k] === value) {
            restLeaders--;
            leaders++;
        }
        if ((leaders > (k + 1) / 2) && (restLeaders > (A.length -k - 1) / 2)) {
            equiLeaders++;
        }
    }
    return equiLeaders;
}
