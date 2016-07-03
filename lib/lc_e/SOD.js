
'use strict';

exports.solution = solution;


//mocha --grep SumOfDigits
//node-debug _mocha --grep SumOfDigits

function solution(N) {

    var res = 0;

    for (var br = 1;br <= N; br++) {
        (br + '').split('').forEach(function(zn){
            res+=parseInt(zn);
        });
    }
    return res;

}
