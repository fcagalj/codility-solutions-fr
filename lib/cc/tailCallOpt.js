
'use strict';

exports.solution = solution;


//

function factorial (n) {
  function fact(n, acc) {
    if (n < 2) {
      return acc;
    } else {
      return fact(n-1, n * acc);
    }
  }

  return fact(n, 1)
}

//mocha --grep tailCallOpt
//node-debug _mocha --grep tailCallOpt

function solution(A) {

}
