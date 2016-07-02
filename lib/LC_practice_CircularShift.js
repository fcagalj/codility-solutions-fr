'use strict';
exports.solution = solution;

//mocha --grep CircularShift
//node-debug _mocha --grep CircularShift


function solution(N) {

    var sum = 0;
    for (var i = 0;i <= N; i++) {
        var br = (i + '').split('');

        br.forEach(function (dg) {
            sum+= parseInt(dg);
        })

    }

    return sum;

}
