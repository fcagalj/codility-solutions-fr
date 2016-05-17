'use strict';
exports.solution = solution;

//mocha --grep NumberOfDiscIntersections
//node-debug _mocha --grep NumberOfDiscIntersections
function solution(A) {

    var R = [];

    for (var k = 0;k < A.length; k++) {
        R[A[k]] = R[A[k]] || [];
        R[A[k]].push(k);
    }

    var count = 0;
    for (var i = 0;i < R.length; i++) {
        for (var j = i;j >= 0; j--) {
            (R[i] || []).forEach(function(Ri){
                (R[j] || []).forEach(function(Rj){
                    var d = Math.abs(Ri - Rj);
                    if(d <= i + j && ((Ri!==Rj) || (Ri===Rj && i!==j))){
                        count++;
                    }

                });
            });
        }
    }

    return count;
}
