'use strict';
exports.solution = solution;

//mocha --grep A3
//node-debug _mocha --grep A3


function solution(A) {
    var X = A.reduce(function(p, el, ind) {
        return p + el * Math.pow(-2, ind);
    }, 0);
    return negate(-X);

    function negate(X) {
        var ans = [];
        while (X !== 0) {
            var rema = X % (-2);
            if (rema < 0) {
                X = Math.floor(X / (-2)) + 1;
                rema = rema + 2;
            } else {
                X = Math.ceil(X / (-2));
            }
            ans.push(rema);
        }
        return ans;
    }
}
