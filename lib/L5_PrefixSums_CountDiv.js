'use strict';
/*
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Assume that:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
Complexity:

expected worst-case time complexity is O(1);
expected worst-case space complexity is O(1).
*/

//https://codility.com/demo/results/trainingEA65W9-MN3/
exports.solution = solution;
//mocha --grep CountDiv
function solution(A, B, K) {
    // if ((B - A) < K) {
    //     return 0;
    // }
    var first = A % K === 0 ? A : A + (K - (A % K));
    var last  = B % K === 0 ? B : B - (B % K);
    if (first > B || last < A){
       return 0;
    }
    if (first === last){
        return 1;
    }
    return ((last - first) / K) + 1;
}
