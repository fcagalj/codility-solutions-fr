
'use strict';

exports.solution = solution;
exports._rotateArray = _rotateArray;
exports._isPrime = _isPrime;


//mocha --grep CircularShift
//node-debug _mocha --grep CircularShift

function solution(N) {

    var res = 0;
    for (var i = 1;i <= N; i++) {
        var count = 0;
        var b = (i + '').split('');
        for (var j = 0;j < b.length; j++) {
            if(_isPrime(parseInt(b.join('')))){
                count++;
            }
            b = _rotateArray(b);

            if(count === b.length){
                res++;
                count = 0;
            }
        }
    }
    return res;

}


function _isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function _rotateArray(arr) {
    var last = arr.pop();
    arr.unshift(last);
    return arr;
}
