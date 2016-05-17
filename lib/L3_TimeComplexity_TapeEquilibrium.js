'use strict'
exports.solution = solution;


//mocha --grep TapeEquilibrium
//node-debug _mocha --grep TapeEquilibrium
//https://codility.com/demo/results/training6DGM7P-U7C/
function solution(A) {

    var sum = 0;
    for (var i = 0;i < A.length; i++) {
      sum+= A[i];
    }
    var sumLeft = 0,
        minDiff = Math.abs(A[0] - (sum - A[0])),
        minIndex;
    for (i = 0;i < A.length - 1; i++) {
        sumLeft+= A[i];
        var sumRight = sum - sumLeft;
        var currDiff = Math.abs(sumLeft - sumRight);
        if(currDiff < minDiff){
            minDiff = currDiff;
            minIndex = i + 1;
        }
      
    }

    return minDiff;

}