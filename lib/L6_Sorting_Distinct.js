'use strict';
/*

 */
exports.solution = solution;


//mocha --grep Distinct
//node-debug _mocha --grep Distinct


function solution(A) {

    A.sort();

    var count = 1;

    for (var i = 1; i < A.length; i++) {
        if (A[i] !== A[i - 1]) {
            count++;
        }
    }
    return count;

}
