
'use strict';

exports.solution = solution;


//mocha --grep DecimalPlacesInNumber
//node-debug _mocha --grep DecimalPlacesInNumber

//123654.22 to 123,654.22
function solution(A) {
    var arr = (A + '').split('.');
    var res = [[], []];
    for (var i = 0;i < 2; i++) {
        var nums = i === 0 ? arr[i].split('').reverse() : arr[i].split('');
        nums.forEach(function(n, j){
            if(j % 3 === 0 && j !== 0){
                res[i].push(',');
            }
            res[i].push(n);
        });
        res[i] = i === 0 ? res[i].reverse().join('') : res[i].join('');
    }
    return res.join('.');
}
