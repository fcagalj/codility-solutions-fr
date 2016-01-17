'use strict';
exports.solution = solution;
//mocha --grep Mushrooms
//node-debug _mocha --grep Mushrooms
function solution(A, k, m) {
    var result = 0,
        P = prefix(A);
    for (var p = k; p >= left(A, k, m) - 1; p--) {
        var leftPos = p,
            rightPos = right(A, p, m - (k - p)),
            r = P[rightPos] - P[leftPos];
        result = result < r ? r : result;
    }
    for (var q = k; q <= right(A, k, m) + 1; q++) {
        leftPos = left(A, q, m - (q - k));
        rightPos = q;
        r = P[rightPos ] - P[leftPos];
        result = result < r ? r : result;
    }
    return result;
}

function right(A, k, m) {
    return k + m - 1 > A.lenght - 1 ? A.lenght - 1 : k + m - 1;
}

function left(A, k, m) {
    return k - m + 1 < 0 ? 0 : k - m + 1;
}

function prefix(A) {
    var P = [];
    P[0] = 0;
    for (var i = 1; i <= A.length; i++) {
        P[i] = P[i - 1] + A[i - 1];
    }
    return P;
}
