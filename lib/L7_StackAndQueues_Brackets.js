'use strict';
exports.solution = solution;
//mocha --grep Brackets

//https://codility.com/demo/results/trainingRCQTMW-UQX/
function solution(A) {
    A = A.split('');
    var b = [];
    for (var i = 0; i < A.length; i++) {
        if (A[i] === '(' || A[i] === '[' || A[i] === '{') {
            b.push(A[i]);
        } else if (A[i] === ')' || A[i] === ']' || A[i] === '}') {
            if (match(b[b.length - 1], A[i])) {
                b.pop();
            } else {
                return 0;
            }
        }
    }
    return (b.length > 0) ? 0 : 1;
}

function match(o, c) {
    switch (o) {
    case '(':
        return c === ')' ? true : false;
    case '[':
        return c === ']' ? true : false;
    case '{':
        return c === '}' ? true : false;
    default:
        return false;
    }
}
