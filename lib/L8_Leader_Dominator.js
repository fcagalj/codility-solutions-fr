'use strict';
exports.solution = solution;
//mocha --grep Dominator
//node-debug _mocha --grep Dominator

//https://codility.com/demo/results/training6ZT577-B8E/
function solution(A) {
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
