'use strict';
exports.solution = solution;
exports.prefix = prefix;
//mocha --grep GenomicRangeQuery
//node-debug _mocha --grep GenomicRangeQuery

//https://codility.com/demo/results/trainingD4HXHB-QAD/ 100%
function solution(S, P, Q) {
    S = S.split('');
    var RES = [],
        COUNTER = [],
        PREF = [];
    for (var i = 0; i < S.length; i++) {
        COUNTER[i] = [];
        COUNTER[i][0] = 0;
        COUNTER[i][1] = 0;
        COUNTER[i][2] = 0;
        COUNTER[i][3] = 0;
    }
    for (i = 0; i < S.length; i++) {
        // for (var j = 1; j <= 4; j++) {
        //   C[i][j] = i > 0 ? C[i - 1][j] : 1;
        // }
        switch (S[i]) {
        case 'A':
            COUNTER[i][0]++;
            break;
        case 'C':
            COUNTER[i][1]++;
            break;
        case 'G':
            COUNTER[i][2]++;
            break;
        case 'T':
            COUNTER[i][3]++;
            break;
        }
    }
    PREF = prefix(COUNTER);
    for (i = 0; i < P.length; i++) {
        if (P[i] > S.length - 1) {
            RES[i] = 0;
            break;
        }
        var sumRange = [];
        for (var j = 0; j <= 3; j++) {
            sumRange[j] = PREF[Q[i] + 1][j] - PREF[P[i]][j];
        }
        for (j = 0; j <= 3; j++) {
            if (sumRange[j] > 0) {
                RES[i] = j + 1;
                break;
            }
        }
    }
    return RES;
}

function prefix(COUNTER) {
    var P = [];
    P[0] = [0, 0, 0, 0];
    for (var i = 1; i <= COUNTER.length; i++) {
        P[i] = [];
        for (var j = 0; j <= 3; j++) {
          P[i][j] = P[i - 1][j] + COUNTER[i - 1][j];
        }

        // P[i][1] = P[i - 1][1] + C[i - 1][1];
        // P[i][2] = P[i - 1][2] + C[i - 1][2];
        // P[i][3] = P[i - 1][3] + C[i - 1][3];
        // P[i][4] = P[i - 1][4] + C[i - 1][4];
    }
    return P;
}
//https://codility.com/demo/results/trainingS79GCS-DQ6/  N*M, 60%
function solution1(S, P, Q) {
    S = S.split('');
    var NUC = [],
        RES = [],
        p,
        q;
    for (var i = 0; i < S.length; i++) {
        switch (S[i]) {
        case 'A':
            NUC[i] = 1;
            break;
        case 'C':
            NUC[i] = 2;
            break;
        case 'G':
            NUC[i] = 3;
            break;
        case 'T':
            NUC[i] = 4;
            break;
        }
    }
    for (var j = 0; j < P.length; j++) {
        if (P[j] > NUC.length - 1) {
            RES[j] = 0;
            break;
        }
        p = P[j];
        q = Q[j] > NUC.length - 1 ? NUC.length - 1 : Q[j];
        var min = 5;
        for (var k = p; k <= q; k++) {
            min = NUC[k] < min ? NUC[k] : min;
        }
        RES[j] = min;
    }
    return RES;
}
