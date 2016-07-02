'use strict';
exports.solution = solution;
//mocha --grep StackAndQueues_Nesting
//node-debug _mocha --grep Nesting
//https://codility.com/demo/results/training2MVGK3-6HY/
function solution(S) {
    S = S.split('');
    var stack = [];
    for (var i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            stack.push(S[i]);
        } else if (S[i] === ')') {
            if (stack.length < 1) {
                return 0;
            } else if (stack.pop() !== '(') {
                return 0;
            }
        }
    }
    return stack.length === 0 ? 1 : 0;
}
