
'use strict';


/**
 *  Dati su L = 0, R = 1 i int N
 *
 *  'L' minja L u 2xL-R
 *  'R' minja R u 2xR-LZa N = -11:
 *
 *  Za N == -11, rezultat je "LLRL":
 *
 *   initial values: L = 0, R = 1;
 *   command 'L' → L = -1, R = 1;
 *   command 'L' → L = -3, R = 1;
 *   command 'R' → L = -3, R = 5;
 *   command 'L' → L =-11, R = 5;
 *
 *  triba nac najkracu sekvencu da L==N ili R==N
 */

exports.solution = solution;


//mocha --grep najkracaSec
//node-debug _mocha --grep najkracaSec

function solution(N) {

  let stps = Math.ceil(Math.log(N > 0 ? N : 1 - N) / Math.log(2));
  let cmnds = '';

  for (N--; stps--; N >>= 1) {
    cmnds += (N & 1) ? 'R' : 'L';
  }
  return cmnds;
}

