'use strict';
exports.solution = solution;

//mocha --grep A1
//node-debug _mocha --grep A1

function solution(A) {
    var br = 0, D = [], i;
    for (i = 0;i < A.length; i++) {
        D[i] = A[i];
    }

    D.sort(function(a, b) {
        return a - b;
    });

    for (i = 0;i < A.length; i++) {
        if(A[i] !== D[i]){
            br++;
        }
    }
    if(br > 2){
        return false;
    }
    return true;

}

function solution1(A) {

    var S = [], i;
    for (i = 0;i < A.length - 1; i++) {
        if(A[i]>A[i+1]){
            S.push(i);
        }
    }

    if(S.length > 2){
        return false;
    }

    if(S.length === 2){
        var tmp = A[S[0]];
        A[S[0]] = A[S[1]];
        A[S[1]] = tmp;
    }

    if(S.length === 1){
        for (i = 0;i < A.length - 1; i++) {
            if(A[S[0]]<=A[i+1] && S[0] !== i + 1){
                var tmp = A[i];
                A[i] = A[S[0]];
                A[S[0]] = tmp;
                break;
            }
        }
    }

    for (i = 0;i < A.length - 1; i++) {
        if(A[i]>A[i+1]){
            return false;
        }
    }

    return true;
}