'use strict';
exports.solution = solution;
//mocha --grep Dominator
//node-debug _mocha --grep Dominator

function solution(A) {
    var Q = [];
    for (var i = 0; i < A.length; i++) {
        if (!Q.length || Q.length <=1) {
            Q.push(A[i]);
        }
        else if (Q.length > 0 && Q[Q.length - 1] !== A[i]) {
            Q.pop();
        }
    }
    var res = Q.pop(),
        c = 0,
        ind;
    for (i = 0; i < A.length; i++) {
        if (res === A[i]) {
            c++;
            ind = i;
        }
    }
    if (c > A.length / 2) {
        return ind;
    } else {
        return -1;
    }
}


//https://codility.com/demo/results/training6ZT577-B8E/
function solution1(A) {
    var stack = [];
    var value;
    var size = 0;
    for (var i = 0; i < A.length; i++) {
        if (size === 0) {
            value = A[i];
            size++;
        } else if (value === A[i]) {
            size++;
        } else if (value !== A[i]) {
            size--;
        }
    }
    if (size <= 0) {
        return -1;
    }
    var countDom = 0;
    var someIndex;
    for (var j = 0; j < A.length; j++) {
        if (A[j] === value) {
            someIndex = j;
            countDom++;
        }
    }
    if (countDom > (A.length / 2)) {
        return someIndex;
    } else {
        return -1;
    }
}
