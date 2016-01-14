'use_strict';
exports.solution = solution;
//mocha --grep PermCheck
function solution(A) {
    A.sort(sortNumber);
    var i = 0,
        L = A.length;
    //for (var i = 0; i < A.length; i++) {
    while (i < L) {
        if (A[i] !== (i + 1)) {
            return 0;
        }
        i++;
    }
    return 1;
}

function sortNumber(a, b) {
    return a - b;
}
