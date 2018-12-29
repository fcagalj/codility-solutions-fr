
'use strict';

exports.solution = solution;

/*************************************************************************************************
 DigitSum
 Find the sum of the digits of all the numbers from 1 to N (both ends included).
 For N = 10 the sum is 1+2+3+4+5+6+7+8+9+(1+0) = 46
 Preferably in O(logN) time. N is at least 1.
 */

//mocha --grep DigitSum
//node-debug _mocha --grep DigitSum

function solution(N) {
    let sum = 0;
  for (let i = 1;i <= N; i++) {
      sum+= _calcDigits(i);
  }
  return sum;
}

function _calcDigits(num) {
  return num.toString().split('').reduce((f, s) => {
    return parseInt(f) + parseInt(s);
  }, 0);
}


function solution55(N) {
    var res = 0;
    for (var i = 1;i <= N; i++) {
        (i + '').split('').forEach(function (ch) {
            res+= parseInt(ch);
        });
    }
    return res;
}


function solution1(N) {

    var res = 0;

    for (var br = 1;br <= N; br++) {
        (br + '').split('').forEach(function(zn){
            res+=parseInt(zn);
        });
    }
    return res;

}
