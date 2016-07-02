'use strict';
/*

*/
exports.solution = solution;


//mocha --grep MaxProductOfThree


function solution(A) {
    A.sort(function(a, b){
        return a - b;
    });
    var max1 = A[0] * A[1] * A[A.length - 1];
    var max2 = A[A.length - 3] * A[A.length - 2] * A[A.length - 1];

    return max2 > max1 ? max2 : max1;
}

///https://codility.com/demo/results/trainingPC5764-SF8/

function solution3(A) {
  A.sort(function(a, b){
    return a - b;
  });
 //console.log('A= ', A);
  var max1 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];

  var max2 = A[0] * A[1] * A[A.length - 1];

  return max1 > max2 ? max1 : max2;
}

///////gluuuuupoooooo
function solution2(A) {
    //A.sort();
    var maxPos = A[0] * A[A.length -1];
    var maxPosQ, maxPosR;
    var maxNeg = A[0] * A[A.length -1];
    var max;
    var maxNegQ, maxNegR;
    if(A.length < 3){
       return;
    }
    for (var i = 0; i < A.length; i++) {
        for (var j = i + 1; j < A.length; j++) {
            if (A[i] * A[j] >= maxPos) {
                maxPos = A[i] * A[j];
                maxPosQ = i;
                maxPosR = j;
            }
            if (A[i] * A[j] <= maxNeg) {
                maxNeg = A[i] * A[j];
                maxNegQ = i;
                maxNegR = j;
            }
        }
    }
    console.log('maxPos, maxPosQ, maxPosR, maxNeg, maxNegQ, maxNegR');
    console.log(maxPos, maxPosQ, maxPosR, maxNeg, maxNegQ, maxNegR);
    // if (maxPos > 0) {
    var maxPosFull = maxPos * A[0];
    for (var k = 0; k < A.length; k++) {
        if ((k !== maxPosQ) && (k !== maxPosR) && (A[k] * maxPos > maxPosFull)) {
            maxPosFull = A[k] * maxPos;
        }
    }
    console.log('maxPosFull:', maxPosFull);
    // }
    // if (maxPos < 0) {
    //     for (let k = 0; k < A.length; k++) {
    //         if (k !== maxPosQ && k !== maxPosR && A[k] < 0 && A[k] * maxPos > maxPos) {
    //             maxPos = -A[k] * maxPos;
    //         }
    //     }
    // }
    var maxNegFull = maxNeg * A[0];
    for (var l = 0; l < A.length; l++) {
        if ((l !== maxNegQ) && (l !== maxNegR) && (A[l] * maxNeg > maxNegFull)) {
            maxNegFull = A[l] * maxNeg;
        }
    }
    console.log('maxNegFull: ', maxNegFull);
    return (maxPosFull > maxNegFull) ? maxPosFull : maxNegFull;
}
