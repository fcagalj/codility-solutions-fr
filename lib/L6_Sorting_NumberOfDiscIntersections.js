'use strict';
exports.solution = solution;

//mocha --grep NumberOfDiscIntersections
//node-debug _mocha --grep NumberOfDiscIntersections


//https://codility.com/demo/results/training2ZTQHW-XSP/
function solution(A) {

    var count = 0;
    for (var i = 0; i < A.length - 1; i++) {
        for (var j = i + 1; j < A.length; j++) {
            var d = Math.abs(i - j);
            if (d <= A[i] + A[j]) {
                count++;
                if (count > 10000000) {
                    return -1;
                }
            }
        }
    }
    return count;
}


//https://codility.com/demo/results/trainingEW5J79-QEY/
function solutionBruteForce(A) {

    var R = [];

    for (var k = 0; k < A.length; k++) {
        R[A[k]] = R[A[k]] || [];
        R[A[k]].push(k);
    }

    var count = 0;
    for (var i = 0; i < R.length; i++) {
        for (var j = i; j >= 0; j--) {
            var arrI = R[i],
                arrJ = R[j];
            if (arrI && arrJ) {
                if (i !== j) {
                    for (var k = 0; k < arrI.length; k++) {
                        for (var z = 0; z < arrJ.length; z++) {
                            var Xi = arrI[k],
                                Xj = arrJ[z],
                                d = Math.abs(Xi - Xj);
                            if (d <= i + j && (Xi !== Xj)) { //&& ((i !== j) || (i === j) && (k !== z))
                                count++;
                                if (count > 10000000) {
                                    return -1;
                                }
                            }
                        }
                    }
                } else {
                    for (var k = 0; k < arrI.length; k++) {
                        for (var z = k; z < arrI.length; z++) {
                            var Xi = arrI[k],
                                Xj = arrJ[z],
                                d = Math.abs(Xi - Xj);
                            if (d <= i + j && (Xi !== Xj)) { //&& ((i !== j) || (i === j) && (k !== z))
                                count++;
                                if (count > 10000000) {
                                    return -1;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return count;
}
