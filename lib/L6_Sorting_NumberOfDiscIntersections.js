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

    //console.log('R', R);
    var count = 0;
    for (var i = 0;i < R.length; i++) {
        for (var j = i;j >= 0; j--) {
            (R[i] || []).forEach(function(Ri, indRi){
                (R[j] || []).forEach(function(Rj, indRj){
                    var d = Math.abs(Ri - Rj);
                    if(d <= i + j && 
                    (Ri!==Rj) && 
                    ((((i===j) && (indRj < indRi)))  || ((i!==j)))){
                        count++;
                    }
                    //console.log('for i=%s, and j=%s, Ri[%s]=%s and Rj[%s]=%s, d=%s , count=%s', i, j, Ri, indRi, Rj, indRj, d, count);

                });
            });
        }
    }

    return count;
}
