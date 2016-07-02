'use strict';
exports.solution = solution;
//mocha --grep Triangle
function solution(A) {
  //točno al nije u vremenu!
    // for (var i = 0; i < A.length; i++) {
    //     for (var j = i + 1; j < A.length; j++) {
    //         for (var k = j + 1; k < A.length; k++) {
    //             if ((A[i] + A[j] > A[k]) &&
    //                 (A[j] + A[k] > A[i]) &&
    //                 (A[k] + A[i] > A[j]))
    //             {
    //                 console.log(i, j, k);
    //                 return 1;
    //             }
    //         }
    //     }
    // }
    //https://codility.com/demo/results/trainingHVN8WM-K7K/
    A.sort(function (a, b) {
        return a - b;
    });
    if (A.length < 3) {
        return 0;
    }
    for (var i = 2; i < A.length; i++) {
        if (A[i - 2] + A[i - 1] > A[i]) {
            return 1;
        }
    }
    return 0;
}
