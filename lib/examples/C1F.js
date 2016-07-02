'use strict';

exports.solution = solution;

//Second try for CF1

function solution(X, A) {
    var countX = 0,
        beg = 0;
    for (var i = 0; i < A.length; i++) {
        //console.log(A[i], X);
        if (A[i] === X) {
            //console.log('Eq: %s, %s', A[i], X);
            countX++;
        }
    }
    var sameX = 0;
    var restDiff = A.length - countX;
    //console.log('Beg: restX=%s, restDiff=%s', countX, restDiff);
    for (var j = 0; j < A.length; j++) {
        //console.log('%s restX=%s, restDiff=%s', A[j], sameX, restDiff);
        if (sameX === restDiff) {
            return j;
        }
        if (A[j] === X) {
            sameX++;
        } else {
            restDiff--;
        }
    }
}
