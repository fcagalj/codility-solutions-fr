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


exports.solution = solution;

function solution(X, A) {

    var cSame=0;
    var cDiff, currSame=0, currDiff=0;
    var index;
    for(var i=0;i<A.length;i++){
        if(X===A[i]){
            cSame++;
        }
    }

    cDiff = A.length - cSame;

    for(var j=0; j < A.length; j++){
        if(X===A[j]){
            currSame++;
        }
        if(currSame===(cDiff - ((j+1) - currSame))){
            index = j;
            return j + 1;
        }
    }
}